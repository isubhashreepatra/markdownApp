import { Meteor } from 'meteor/meteor';
import { Documents } from '../imports/collections/documents';


Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('documents', function () {
    return Documents.find({ ownerId: this.userId });
  });
  
  Meteor.publish('sharedDocuments', function () {
    const user = Meteor.users.findOne(this.userId);
    if (!user) {
      return ;
    }
    const email = user.emails[0].address;
    return Documents.find({
      sharedWith: { $elemMatch: { $eq: email }}
    });
  });
});
