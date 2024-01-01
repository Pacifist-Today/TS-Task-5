//Створіть класи Circle, Rectangle, Square і Triangle. У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі

class Shape {
    private _color: string
    private _name: string

    constructor(name: string, color: string) {
        this._name = name
        this._color = color
    }

    calculateArea(): void {}
}

interface IPrint {
    print(): string
}

class Circle extends Shape {
    private _radius: number
    private _area: number

    constructor (name: string, color: string, radius: number) {
        super(name, color)
        this._radius = radius
    }

    override calculateArea (): number {
        this._area = Math.PI * Math.pow(this._radius, 2)
        return this._area
    }
}

class Rectangle extends Shape implements IPrint {
    private _length: number
    private _width: number
    private _area: number

    constructor (name: string, color: string, length: number, width: number) {
        super(name, color)
        this._length = length
        this._width = width
    }

    override calculateArea (): number {
        this._area = this._length * this._width
        return this._area
    }

    print (): string {
        return `S = length * width = ${this._length} * ${this._width}`
    }
}

class Square extends Shape implements IPrint {
    private _side: number
    private _area: number

    constructor (name: string, color: string, side: number) {
        super(name, color)
        this._side = side
    }

    override calculateArea (): number {
        this._area = Math.pow(this._side, 2)
        return this._area
    }

    print (): string {
        return `S = side^2 = ${Math.pow(this._side, 2)}`
    }
}

class Triangle extends Shape {
    private _base: number
    private _height: number
    private _area: number

    constructor (name: string, color: string, base: number, height: number) {
        super(name, color)
        this._base = base
        this._height = height
    }

    override calculateArea (): number {
        this._area = (this._height * this._base) / 2
        return this._area
    }
}