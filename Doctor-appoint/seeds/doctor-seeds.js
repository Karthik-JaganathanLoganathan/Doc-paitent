const { Doctor } = require('../models');

const DoctorData = [
    {
        DoctorName:'John Doe',
        DoctorSpeacialty:'GP',
        PhoneNumber:'123456789',
        DoctorLocation:'Springvale',
        AdditionalNotes:'Only avaible on weekdays after 3pm',

    },
    {
      DoctorName:'John McClane',
      DoctorSpeacialty:'Ortho',
      PhoneNumber:'987654321',
      DoctorLocation:'Nakatomi Tower',
      AdditionalNotes:'Available during clinic hours',

  },
  {
    DoctorName:'The dude lebowski',
    DoctorSpeacialty:'Endocrinologist',
    PhoneNumber:'456123789',
    DoctorLocation:'Flemington',
    AdditionalNotes:'Only availabe on the weekends',

},

    
];

const seedDoctor = () => Doctor.bulkCreate(DoctorData);

module.exports = seedDoctor;
