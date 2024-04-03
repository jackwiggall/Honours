/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGameInfo = /* GraphQL */ `
  query GetGameInfo($id: ID!) {
    getGameInfo(id: $id) {
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
export const listGameInfos = /* GraphQL */ `
  query ListGameInfos(
    $filter: ModelGameInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        shortDesc
        longDesc
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const gameInfosByAccountsID = /* GraphQL */ `
  query GameInfosByAccountsID(
    $accountsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGameInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gameInfosByAccountsID(
      accountsID: $accountsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        accountsID
        title
        shortDesc
        longDesc
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComments = /* GraphQL */ `
  query GetComments($id: ID!) {
    getComments(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountID
        text
        gameID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByAccountID = /* GraphQL */ `
  query CommentsByAccountID(
    $accountID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByAccountID(
      accountID: $accountID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        accountID
        text
        gameID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByGameID = /* GraphQL */ `
  query CommentsByGameID(
    $gameID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByGameID(
      gameID: $gameID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        accountID
        text
        gameID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAccounts = /* GraphQL */ `
  query GetAccounts($username: String!) {
    getAccounts(username: $username) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $username: String
    $filter: ModelAccountsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAccounts(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        username
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPages = /* GraphQL */ `
  query GetPages($id: ID!) {
    getPages(id: $id) {
      id
      gameID
      localID
      title
      text
      linkText
      linkID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameID
        localID
        title
        text
        linkText
        linkID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const pagesByGameID = /* GraphQL used for playing page*/ `
  query PagesByGameID(
    $gameID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pagesByGameID(
      gameID: $gameID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        localID
        title
        text
        linkText
        linkID
        __typename
      }
      nextToken
      __typename
    }
  }
`;
