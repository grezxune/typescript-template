const world = 'World';

export function hello(word: string = world): string {
    return `Hello ${word}!`;
}

export const test = (): void => {
    const obj = { name: 'Tommy', age: '27' };

    console.log({ id: '1', ...obj });
};

class TestClass {
    tryThis = (thing = 'THING'): string => {
        return `Tried ${thing}`;
    };
    instanceProp = 'Bork';

    static staticProp = 'static';
    static fun = function(): string {
        return 'Fun!';
    };
}

console.log('Here!');
test();

const cl = new TestClass();

console.log(cl.tryThis(), cl.instanceProp, TestClass.staticProp, TestClass.fun());
