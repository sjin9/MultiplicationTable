
export type Multiplication = [number, number, number] //define a 数据结构

export class MultiplicationTable {
  public renderMultiplicationTable(start: number, end: number): string | null{ //string or null
    if(!this.isValid(start,end)) {
      return null
    }

    const table: Multiplication[][] = this.generateMultiplicationTable(start,end)

    const tableString: string = this.render(table)
    return tableString
  }

  private isValid(start: number, end: number): boolean {
    return Number.isInteger(start)&&Number.isInteger(end) //make sure both values are integer
    &&this.isValidNumber(start)&&this.isValidNumber(end)
    &&this.isEndGreaterOrEqualToStart(start, end)
    //all set as provate unless要实现这个方法，作用域尽量小
    //use this. in private method
  }

  private isValidNumber(num: number): boolean {
    return num >=1 && num <= 1000
  }

  private isEndGreaterOrEqualToStart(start:number, end: number) {
    return start <= end
  }

  private generateSingleMultiplication(start:number, end: number): number {
    const product = start*end
    return product
  }

  private generateRowMultiplier(start:number, end: number): Multiplication[] {
    const row:Multiplication[] = []
    for(let i=start; i<=end; i++) {
      const productInRow = this.generateSingleMultiplication(i, end)
      row.push([i, end, productInRow])
    }
    return row
  }

  private generateMultiplicationTable(start:number, end: number):Multiplication[][] {
    const table:Multiplication[][] = []
    for(let j=start; j<=end; j++) {
      const column = this.generateRowMultiplier(start, j)
      table.push(column)
    }
    return table
  }

  private render(table: Multiplication[][]):string{
    return table.map(line=>
      line.map(
        item => `${item[0]} * ${item[1]} = ${item[2]}`) //模板字符串
        .join('  ')
    ).join('\n')
  }

}
