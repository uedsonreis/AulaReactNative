export interface Actions {

    setInCash(value: number): void
    setInstallmentValue(value: number): void
    setInstallmentsAmount(value: number): void
    setRate(value: number): void
    calculate(): void
}