import {describe, expect, it} from 'vitest'
import {add, isEven} from './math'

describe('math utils', () => {
    it('add adds two numbers', () => {
        expect(add(2, 2)).toBe(4);
    })
})