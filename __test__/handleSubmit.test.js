import { handleSubmit } from '../src/client/js/formHandler'

describe("Testing the submit function", () => {
  test("Testing if submit function exist", () => {
    expect(handleSubmit).toBeDefined();
  })
})
