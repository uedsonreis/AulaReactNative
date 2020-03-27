export class Calculation {

    public inCash: number;
    public installmentsAmount: number;
    public installmentValue: number;
    public rate: number;
    
    public calculate(): number[] {
        const total = this.installmentValue * this.installmentsAmount;

        const economyInCash = this.futureValue(
            (total - this.inCash),      // valor investido
            this.installmentsAmount,    // número de meses
            0,                          // valor retirado por mês
            this.rate                   // taxa de rentabilidade
        );
        
        const economyInInstallments = this.futureValue(
            total,
            this.installmentsAmount,
            this.installmentValue,
            this.rate
        );

        return [economyInCash, economyInInstallments];
    }

    private futureValue(pv: number, noi: number, voi: number, rate: number): number {
        // Formula: (VP - (1+r)^n ) * (VP - r*Vo)
        return (voi - Math.pow((rate+1), noi) * (voi - rate*pv)) / rate;
    }
}