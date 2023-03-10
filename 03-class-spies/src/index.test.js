const Fibonnaci = require('./fibonacci')
const sinon = require('sinon')
const { deepStrictEqual } = require('assert')


;
(async () => {
    {
        const fibonnaci = new Fibonnaci()
        const spy = sinon.spy(fibonnaci, fibonnaci.execute.name)
        for await (const i of fibonnaci.execute(3)) {}
        const expectedCallCount = 4
        deepStrictEqual(spy.callCount, expectedCallCount)
    }

    {
        const fibonnaci = new Fibonnaci()
        const spy = sinon.spy(fibonnaci, fibonnaci.execute.name)
        const [...results] = fibonnaci.execute(5)
        const { args } = spy.getCall(2)
        const expectedResult = [0, 1, 1, 2, 3]
        const expectedParams = Object.values({
            input: 3,
            current: 1,
            next: 2
        })

        deepStrictEqual(args, expectedParams)
        deepStrictEqual(results, expectedResult)
    }
})()