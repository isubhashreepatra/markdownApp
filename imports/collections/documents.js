import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'documents.insert': function () {
    return Documents.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },

  'documents.remove': function (doc) {
    return Documents.remove(doc);
  },

  'documents.update': function (doc, newContent) {
    return Documents.update(doc._id, { $set: { content: newContent } });
  },

  'document.share': function (doc, emailId) {
    console.log(emailId);
    return Documents.update(doc._id, { $push: { sharedWith: emailId } });
  }
});

export const Documents = new Mongo.Collection('documents');
