import {pureOnEnter} from '../GreetingContainer'
import {KeyboardEvent} from 'react';

let added: boolean
const addUser = () => {
    added = true
}

beforeEach(() => {
    added = false
})

test('name 1', () => {
    pureOnEnter({key: 'Enter'} as KeyboardEvent<HTMLInputElement>, addUser)
    expect(added).toBe(true)
})
test('name 2', () => {
    pureOnEnter({key: ''} as KeyboardEvent<HTMLInputElement>, addUser)
    expect(added).toBe(false)
})
