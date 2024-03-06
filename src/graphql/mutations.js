/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGameInfo = /* GraphQL */ `
  mutation CreateGameInfo(
    $input: CreateGameInfoInput!
    $condition: ModelGameInfoConditionInput
  ) {
    createGameInfo(input: $input, condition: $condition) {
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
export const updateGameInfo = /* GraphQL */ `
  mutation UpdateGameInfo(
    $input: UpdateGameInfoInput!
    $condition: ModelGameInfoConditionInput
  ) {
    updateGameInfo(input: $input, condition: $condition) {
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
export const deleteGameInfo = /* GraphQL */ `
  mutation DeleteGameInfo(
    $input: DeleteGameInfoInput!
    $condition: ModelGameInfoConditionInput
  ) {
    deleteGameInfo(input: $input, condition: $condition) {
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
export const createComments = /* GraphQL */ `
  mutation CreateComments(
    $input: CreateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    createComments(input: $input, condition: $condition) {
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
export const updateComments = /* GraphQL */ `
  mutation UpdateComments(
    $input: UpdateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    updateComments(input: $input, condition: $condition) {
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
export const deleteComments = /* GraphQL */ `
  mutation DeleteComments(
    $input: DeleteCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    deleteComments(input: $input, condition: $condition) {
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
export const createAccounts = /* GraphQL */ `
  mutation CreateAccounts(
    $input: CreateAccountsInput!
    $condition: ModelAccountsConditionInput
  ) {
    createAccounts(input: $input, condition: $condition) {
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
export const updateAccounts = /* GraphQL */ `
  mutation UpdateAccounts(
    $input: UpdateAccountsInput!
    $condition: ModelAccountsConditionInput
  ) {
    updateAccounts(input: $input, condition: $condition) {
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
export const deleteAccounts = /* GraphQL */ `
  mutation DeleteAccounts(
    $input: DeleteAccountsInput!
    $condition: ModelAccountsConditionInput
  ) {
    deleteAccounts(input: $input, condition: $condition) {
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
