import { Subject } from 'rxjs';
import { ApplientClass, IApplientClass } from 'src/assets/interfaces/appient';

export class DummyApplients {
   localApplients!: Subject<IApplientClass[]>;
  applients: IApplientClass[] = [
    {
      id: 1,
      name: 'andre filho',
      email: 'andre@adentis.pt',
      admissionDate: new Date('14-02-2022'),
      birthDate: new Date('17-08-1973'),
      phone: '918203555',
      emergencyContactPhone: '916203875',
      emergencyContactName: 'debora',
      degreeOfkinShip: 'esposa',
      naturalness: 'Benfica',
      nationality: 'Portugal',
      address: 'afonso castro nº7 3ºesq',
      zipeCode: '2900677',
      locality: 'setubal',
      documentNumber: '197940es',
      documentValidityDate: new Date('01-10-2031'),
      admissionPlace: 'Portugal',
      internationalID: 'sdahqhege',
      internationalValidity: '01/2030',
      internationalEmitDate: '01/2020',
      passportNumber: 'PASS38373jfjth',
      passportValidity: '01/2030',
      passportExpeditionDate: new Date('01/2030'),
      vatNumber: '288249ggg',
      socialSecurity: '12034568765gh',
      maritalStatus: 'casado',
      numberOfDependents: 1,
      bankName: 'novoBanco',
      ibanName: 'PT5000000045464758576987',
      swiftName: 'SAVHTD',
      bicNumber: '00000045464758576987',
      nibNumber: '45464758576987',
      registrationVehicleNumber: '69CN10',
    },
    {
      id: 2,
      name: 'tony filho',
      email: 'tonyfilho@adentis.pt',
      admissionDate: new Date('14-02-2022'),
      birthDate: new Date('17-08-1973'),
      phone: '918203784',
      emergencyContactPhone: '916203875',
      emergencyContactName: 'debora',
      degreeOfkinShip: 'esposa',
      naturalness: 'vitoria',
      nationality: 'Brasil',
      address: 'afonso castro nº7 3ºesq',
      zipeCode: '2900677',
      locality: 'setubal',
      documentNumber: '197940es',
      documentValidityDate: new Date('01-10-2031'),
      admissionPlace: 'Portugal',
      internationalID: 'sdahqhege',
      internationalValidity: '01/2030',
      internationalEmitDate: '01/2020',
      passportNumber: 'PASS38373jfjth',
      passportValidity: '01/2030',
      passportExpeditionDate: new Date('01/2030'),
      vatNumber: '288249ggg',
      socialSecurity: '12034568765gh',
      maritalStatus: 'casado',
      numberOfDependents: 1,
      bankName: 'novoBanco',
      ibanName: 'PT5000000045464758576987',
      swiftName: 'SAVHTD',
      bicNumber: '00000045464758576987',
      nibNumber: '45464758576987',
      registrationVehicleNumber: '69CN10',
    },
    {
      id: 3,
      name: 'rui',
      email: 'rui@adentis.pt',
      admissionDate: new Date('14-02-2022'),
      birthDate: new Date('17-08-1973'),
      phone: '918203754',
      emergencyContactPhone: '916203875',
      emergencyContactName: 'debora',
      degreeOfkinShip: 'esposa',
      naturalness: 'vitoria',
      nationality: 'Portugal',
      address: 'afonso castro nº7 3ºesq',
      zipeCode: '2900677',
      locality: 'setubal',
      documentNumber: '197940es',
      documentValidityDate: new Date('01-10-2031'),
      admissionPlace: 'Portugal',
      internationalID: 'sdahqhege',
      internationalValidity: '01/2030',
      internationalEmitDate: '01/2020',
      passportNumber: 'PASS38373jfjth',
      passportValidity: '01/2030',
      passportExpeditionDate: new Date('01/2030'),
      vatNumber: '288249ggg',
      socialSecurity: '12034568765gh',
      maritalStatus: 'casado',
      numberOfDependents: 1,
      bankName: 'novoBanco',
      ibanName: 'PT5000000045464758576987',
      swiftName: 'SAVHTD',
      bicNumber: '00000045464758576987',
      nibNumber: '45464758576987',
      registrationVehicleNumber: '69CN10',
    },
    {
      id: 4,
      name: 'Marcelo',
      email: 'marcelo@adentis.pt',
      admissionDate: new Date('14-02-2022'),
      birthDate: new Date('17-08-1973'),
      phone: '9182037666',
      emergencyContactPhone: '916203875',
      emergencyContactName: '',
      degreeOfkinShip: 'esposa',
      naturalness: 'lisboa',
      nationality: 'Portugal',
      address: 'afonso castro nº7 3ºesq',
      zipeCode: '2900677',
      locality: 'setubal',
      documentNumber: '197940es',
      documentValidityDate: new Date('01-10-2031'),
      admissionPlace: 'Portugal',
      internationalID: 'sdahqhege',
      internationalValidity: '01/2030',
      internationalEmitDate: '01/2020',
      passportNumber: 'PASS38373jfjth',
      passportValidity: '01/2030',
      passportExpeditionDate: new Date('01/2030'),
      vatNumber: '288249ggg',
      socialSecurity: '12034568765gh',
      maritalStatus: 'casado',
      numberOfDependents: 1,
      bankName: 'novoBanco',
      ibanName: 'PT5000000045464758576987',
      swiftName: 'SAVHTD',
      bicNumber: '00000045464758576987',
      nibNumber: '45464758576987',
      registrationVehicleNumber: '69CN10',
    },
    {
      id: 5,
      name: 'Daniel',
      email: 'daniel@adentis.pt',
      admissionDate: new Date('14-02-2022'),
      birthDate: new Date('17-08-1973'),
      phone: '9182037666',
      emergencyContactPhone: '916203875',
      emergencyContactName: '',
      degreeOfkinShip: 'esposa',
      naturalness: 'lisboa',
      nationality: 'Portugal',
      address: 'afonso castro nº7 3ºesq',
      zipeCode: '2900677',
      locality: 'setubal',
      documentNumber: '197940es',
      documentValidityDate: new Date('01-10-2031'),
      admissionPlace: 'Portugal',
      internationalID: 'sdahqhege',
      internationalValidity: '01/2030',
      internationalEmitDate: '01/2020',
      passportNumber: 'PASS38373jfjth',
      passportValidity: '01/2030',
      passportExpeditionDate: new Date('01/2030'),
      vatNumber: '288249ggg',
      socialSecurity: '12034568765gh',
      maritalStatus: 'casado',
      numberOfDependents: 1,
      bankName: 'novoBanco',
      ibanName: 'PT5000000045464758576987',
      swiftName: 'SAVHTD',
      bicNumber: '00000045464758576987',
      nibNumber: '45464758576987',
      registrationVehicleNumber: '69CN10',
    },
    {
      id: 6,
      name: 'Bernado',
      email: 'bernado@adentis.pt',
      admissionDate: new Date('14-02-2022'),
      birthDate: new Date('17-08-1973'),
      phone: '9182037666',
      emergencyContactPhone: '916203875',
      emergencyContactName: '',
      degreeOfkinShip: 'esposa',
      naturalness: 'lisboa',
      nationality: 'Portugal',
      address: 'afonso castro nº7 3ºesq',
      zipeCode: '2900677',
      locality: 'setubal',
      documentNumber: '197940es',
      documentValidityDate: new Date('01-10-2031'),
      admissionPlace: 'Portugal',
      internationalID: 'sdahqhege',
      internationalValidity: '01/2030',
      internationalEmitDate: '01/2020',
      passportNumber: 'PASS38373jfjth',
      passportValidity: '01/2030',
      passportExpeditionDate: new Date('01/2030'),
      vatNumber: '288249ggg',
      socialSecurity: '12034568765gh',
      maritalStatus: 'casado',
      numberOfDependents: 1,
      bankName: 'novoBanco',
      ibanName: 'PT5000000045464758576987',
      swiftName: 'SAVHTD',
      bicNumber: '00000045464758576987',
      nibNumber: '45464758576987',
      registrationVehicleNumber: '69CN10',
    },
    {
      id: 6,
      name: 'Ricardo',
      email: 'ricardo@adentis.pt',
      admissionDate: new Date('14-02-2022'),
      birthDate: new Date('17-08-1973'),
      phone: '9182037666',
      emergencyContactPhone: '916203875',
      emergencyContactName: '',
      degreeOfkinShip: 'esposa',
      naturalness: 'lisboa',
      nationality: 'Portugal',
      address: 'afonso castro nº7 3ºesq',
      zipeCode: '2900677',
      locality: 'setubal',
      documentNumber: '197940es',
      documentValidityDate: new Date('01-10-2031'),
      admissionPlace: 'Portugal',
      internationalID: 'sdahqhege',
      internationalValidity: '01/2030',
      internationalEmitDate: '01/2020',
      passportNumber: 'PASS38373jfjth',
      passportValidity: '01/2030',
      passportExpeditionDate: new Date('01/2030'),
      vatNumber: '288249ggg',
      socialSecurity: '12034568765gh',
      maritalStatus: 'casado',
      numberOfDependents: 1,
      bankName: 'novoBanco',
      ibanName: 'PT5000000045464758576987',
      swiftName: 'SAVHTD',
      bicNumber: '00000045464758576987',
      nibNumber: '45464758576987',
      registrationVehicleNumber: '69CN10',
    },
    {
      id: 7,
      name: 'Jose Salgueiro',
      email: 'ricardo@adentis.pt',
      admissionDate: new Date('14-02-2022'),
      birthDate: new Date('17-08-1973'),
      phone: '9182037666',
      emergencyContactPhone: '916203875',
      emergencyContactName: '',
      degreeOfkinShip: 'esposa',
      naturalness: 'lisboa',
      nationality: 'Portugal',
      address: 'afonso castro nº7 3ºesq',
      zipeCode: '2900677',
      locality: 'setubal',
      documentNumber: '197940es',
      documentValidityDate: new Date('01-10-2031'),
      admissionPlace: 'Portugal',
      internationalID: 'sdahqhege',
      internationalValidity: '01/2030',
      internationalEmitDate: '01/2020',
      passportNumber: 'PASS38373jfjth',
      passportValidity: '01/2030',
      passportExpeditionDate: new Date('01/2030'),
      vatNumber: '288249ggg',
      socialSecurity: '12034568765gh',
      maritalStatus: 'casado',
      numberOfDependents: 1,
      bankName: 'novoBanco',
      ibanName: 'PT5000000045464758576987',
      swiftName: 'SAVHTD',
      bicNumber: '00000045464758576987',
      nibNumber: '45464758576987',
      registrationVehicleNumber: '69CN10',
    },
  ];

  constructor(){
   this.localApplients.next(this.applients)
  }
}
