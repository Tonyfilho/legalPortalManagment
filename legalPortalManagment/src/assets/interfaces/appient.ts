export interface IApplientClass {
    id: number;
    name: string;
    admissionDate: Date;
    country: string;
    birthDate: Date;
    email: string;
    phone: string;
    naturalness: string;
    nationality: string;
    address:string;
    zipeCode:string;
    locality:string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    emergencyDegreeOfkinShip: string;    
    vatNumber:string;
    socialSecurity:string;
    documentNumber:string;
    documentValidityDate:Date;
    documentExpeditionDate:Date;
    internationalID:string;
    internationalValidity:string;
    internationalEmitDate:string;
    passportNumber:string;
    passportValidity:string;
    passportExpeditionDate:Date;
    // não feito daqui para baixo
    admissionPlace:string;
    maritalStatus:string;
    numberOfDependents:number;
    bankName:string;
    ibanName:string;
    swiftName:string;
    bicNumber:string;
    nibNumber: string;
    registrationVehicleNumber:string;
}

export class ApplientClass {
    id!: number;
    name!: string;
    email!: string;
    admissionDate: Date;
    birthDate!: Date;
    phone!: string;
    emergencyContactPhone!: string;
    emergencyContactName!: string;
    degreeOfkinShip!: string;
    naturalness!: string;
    nationality!: string;
    address!:string;
    zipeCode!:string;
    locality!:string;
    documentNumber!:string;
    documentValidityDate!:Date;
    documentExpeditionDate!:Date;
    admissionPlace!:string;
    internationalID!:string;
    internationalValidity!:string;
    internationalEmitDate!:string;
    passportNumber!:string;
    passportValidity!:string;
    passportExpeditionDate!:Date;
    vatNumber!:string;
    socialSecurity!:string;
    maritalStatus!:string;
    numberOfDependents!:string;
    bankName!:string;
    swiftName!:string;
    bicNumber!:string;
    nibNumber!: string;
    registrationVehicleNumber!:string;

constructor(){
    this.admissionDate = new Date();
}
 


}