import {test} from 'hoare';
import {mock} from 'cjs-mock';
import * as mod from '.';
import express from 'express';
import axios from 'axios';
import {stub} from 'sinon';
import {Server} from 'http';
import {log} from 'console';

const TEST_PORT = 9999; // must be available on system
const app = express();
let server: Server;
let sleeptimeMs = 0;

function sleep(ms: number): Promise<void> {

    return new Promise((res) => {

        setTimeout(res, ms);

    });

}

async function setupServer(sut: typeof mod): Promise<void> {

    app.use(sut.logRequest);
    app.get('/', (req, res) => {

        sleep(sleeptimeMs)
            .then(() => res.status(200).send('OK'))
            .catch(console.log.bind(console));

    });

    return new Promise((resolve) => {

        server = app.listen(TEST_PORT, () => resolve());

    });

}

function teardownServer() {

    server.close();

}

async function makeRequestWithDelay(delayMs: number): Promise<void> {

    sleeptimeMs = delayMs;
    await axios.get(`http://localhost:${TEST_PORT}`);
    sleeptimeMs = 0;

}

// eslint-disable-next-line max-lines-per-function
test('test', async (assert) => {

    // setup
    const loggerStub = stub();
    const sut: typeof mod = mock('./index', {
        jsout: {logger: {info: loggerStub}},
    });
    const expectedLogData = {
        method: 'GET',
        url: '/',
        hostname: 'localhost',
        statusCode: 200,
        statusMessage: 'OK',
    };

    await setupServer(sut);

    // run
    await makeRequestWithDelay(0);
    await makeRequestWithDelay(1000);
    await makeRequestWithDelay(2000);

    // get log durations and remove from log so we can more easily assert
    const args = loggerStub.args;
    const logDurations = args.map((log) => log[1].durationMs);
    const logsWithDurationsRemoved = args.map((log: any) => {

        const {durationMs, ...rest} = log[1];

        return [log[0], rest];

    });

    // delete 'ip' from log as it is not deterministic
    delete logsWithDurationsRemoved[0][1].ip;
    delete logsWithDurationsRemoved[1][1].ip;
    delete logsWithDurationsRemoved[2][1].ip;

    // assertions
    assert.equal(logsWithDurationsRemoved[0], ['req', expectedLogData]);
    assert.equal(logsWithDurationsRemoved[1], ['req', expectedLogData]);
    assert.equal(logsWithDurationsRemoved[2], ['req', expectedLogData]);
    assert.equal(logDurations[0] > 0 && logDurations[0] < 15, true);
    assert.equal(logDurations[1] > 1000 && logDurations[0] < 1015, true);
    assert.equal(logDurations[2] > 2000 && logDurations[0] < 2015, true);

    // teardown so process can exit
    teardownServer();

});
