/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGameInfo = /* GraphQL */ `
  subscription OnCreateGameInfo($filter: ModelSubscriptionGameInfoFilterInput) {
    onCreateGameInfo(filter: $filter) {
      id
      accountsID
      title
      shortDesc
      longDesc
      CommentSection {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateGameInfo = /* GraphQL */ `
  subscription OnUpdateGameInfo($filter: ModelSubscriptionGameInfoFilterInput) {
    onUpdateGameInfo(filter: $filter) {
      id
      accountsID
      title
      shortDesc
      longDesc
      CommentSection {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteGameInfo = /* GraphQL */ `
  subscription OnDeleteGameInfo($filter: ModelSubscriptionGameInfoFilterInput) {
    onDeleteGameInfo(filter: $filter) {
      id
      accountsID
      title
      shortDesc
      longDesc
      CommentSection {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments($filter: ModelSubscriptionCommentsFilterInput) {
    onCreateComments(filter: $filter) {
      id
      accountID
      text
      gameID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments($filter: ModelSubscriptionCommentsFilterInput) {
    onUpdateComments(filter: $filter) {
      id
      accountID
      text
      gameID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments($filter: ModelSubscriptionCommentsFilterInput) {
    onDeleteComments(filter: $filter) {
      id
      accountID
      text
      gameID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAccounts = /* GraphQL */ `
  subscription OnCreateAccounts($filter: ModelSubscriptionAccountsFilterInput) {
    onCreateAccounts(filter: $filter) {
      id
      username
      HasComments {
        nextToken
        __typename
      }
      HasGames {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAccounts = /* GraphQL */ `
  subscription OnUpdateAccounts($filter: ModelSubscriptionAccountsFilterInput) {
    onUpdateAccounts(filter: $filter) {
      id
      username
      HasComments {
        nextToken
        __typename
      }
      HasGames {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAccounts = /* GraphQL */ `
  subscription OnDeleteAccounts($filter: ModelSubscriptionAccountsFilterInput) {
    onDeleteAccounts(filter: $filter) {
      id
      username
      HasComments {
        nextToken
        __typename
      }
      HasGames {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
