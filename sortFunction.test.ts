import { sortFunction } from "./sortFunction";

test('Test 1: [3,4,1] -> [1,3,4]', () => {
    const initialArray = [3,4,1];
    expect(sortFunction(initialArray)).toBe(initialArray.sort());
})

test('Test 2: [1,2,3] -> [1,2,3]', () => {
    const initialArray = [1,2,3];
    expect(sortFunction(initialArray)).toBe(initialArray.sort());
})

test('Test 2: [-1,2.5,0] -> [-1,0,2.5]', () => {
    const initialArray = [-1,2.5,0];
    expect(sortFunction(initialArray)).toBe(initialArray.sort());
})

test('Hidden Test 1', () => {
    const initialArray = [-1,Math.E,Math.LN2,Math.PI,5e2,0xFF,0]; 
    try{
        expect(sortFunction(initialArray)).toBe(initialArray.sort());
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 1 failed')
    }
})

test('Hidden Test 2', () => {
    let initialArray = [];
    for(let i = 0; i < 999999; i++){
        initialArray.push(Math.random());
    }
    try{
        expect(sortFunction(initialArray)).toBe(initialArray.sort());
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 2 failed')
    }
})

test('Hidden Test 3', () => {
    const initialArray = [0,0,0,0,0,0]; 
    try{
        expect(sortFunction(initialArray)).toBe(initialArray.sort());
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 3 failed')
    }
})

test('Hidden Test 4', () => {
    const initialArray = [1,0.5,0.5,-1,0,0]; 
    try{
        expect(sortFunction(initialArray)).toBe(initialArray.sort());
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 4 failed')
    }
})