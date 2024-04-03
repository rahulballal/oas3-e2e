import { test, expect } from '@playwright/test'
import spec from '../spec.json'

type Paths = keyof typeof spec.paths

type ValidGetCatResponseCodes = keyof typeof spec.paths['/cat']['get']['responses']

test('GET /cat should return 200', async ({ request }) => {
    const path: Paths = '/cat'
    const responseCode: ValidGetCatResponseCodes = '200'
    const response = await request.get('v1'+path)
    expect(response.status().toString()).toBe(responseCode)
})