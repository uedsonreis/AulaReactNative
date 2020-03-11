export class Calculation {

    public economyInCash: number;
    public economyInInstallments: number;

    public rate: number;
    public inCash: number;
    public installmentsNumber: number;
    public installmentValue: number

    public calculate(): void {
        const total = this.installmentValue * this.installmentsNumber;

        this.economyInCash = this.futureValue((total - this.inCash), this.installmentsNumber, 0, this.rate);
        this.economyInInstallments = this.futureValue(total, this.installmentsNumber, this.installmentValue, this.rate);
    }

    private futureValue(pv: number, noi: number, voi: number, rate: number): number {
        // Formula: (VP - (1+r)^n ) * (VP - r*Vo)
        return (voi - Math.pow((rate+1), noi) * (voi - rate*pv)) / rate;
    }

}