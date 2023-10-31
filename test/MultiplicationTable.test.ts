import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBe('1 * 1 = 1')
  })
  it('should return null for invalid inputs', () => {
    // given
    const table = new MultiplicationTable()
    const start = 4
    const end = 2
    // when
    const rendered = table.renderMultiplicationTable(start, end)
    // then
    expect(rendered).toBeNull()
  })

  it('should return a multuplication table between 2 and 4', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 3
    // when
    const rendered = table.renderMultiplicationTable(start, end)
    // then
    expect(rendered).toBe('2 * 2 = 4\n2 * 3 = 6  3 * 3 = 9')
  })

  it('should return null for non-integer value', () => {
    // given
    const table = new MultiplicationTable()
    const start = 4.444
    const end = 9
    // when
    const rendered = table.renderMultiplicationTable(start, end)
    // then
    expect(rendered).toBeNull()
  })

})
