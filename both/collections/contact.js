
Schemas.ContactSchema = new SimpleSchema({
  name: {
    type: String,
    max: 100,
    min: 3
  }, 
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  message: {
    type: String,    
    max: 10000,
    min: 10
  }
});
