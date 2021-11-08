import gql from "graphql-tag";

export const REGISTER_USER = gql`
  mutation register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $birthday: String!
    $gender: String!
    $password: String!
  ) {
    register(
      registerInput: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        birthday: $birthday
        gender: $gender
        password: $password
      }
    ) {
      firstName
      lastName
      email
      birthday
      gender
      token
      avatarImage
      coverImage
      username
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      firstName
      lastName
      email
      birthday
      gender
      token
      avatarImage
      coverImage
      username
    }
  }
`;

export const LOAD_USER = gql`
  {
    loadUser {
      id
      school
      firstName
      lastName
      email
      birthday
      gender
      token
      avatarImage
      coverImage
      username
      workPlace
      homePlace
      friends {
        id
        firstName
        lastName
        avatarImage
        username
      }
    }
  }
`;

export const LOAD_FROM_URL_USER = gql`
  query loadFromUrlUser($username: String!) {
    loadFromUrlUser(username: $username) {
      id
      school
      firstName
      lastName
      email
      birthday
      gender
      avatarImage
      coverImage
      username
      workPlace
      homePlace
      friends {
        id
        firstName
        lastName
        avatarImage
        username
      }
    }
  }
`;

export const GET_POSTS = gql`
  {
    getPosts {
      id
      userId {
        id
        firstName
        lastName
        avatarImage
        username
      }
      body
      image
      createdAt
      comments {
        id
        userId {
          id
          firstName
          lastName
          avatarImage
          username
        }
        postId
        body
        createdAt
      }
      likes {
        userId
        postId
        createdAt
      }
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query getSinglePost($postId: String!) {
    getSinglePost(postId: $postId) {
      id
      userId {
        id
        firstName
        lastName
        avatarImage
        username
      }
      body
      image
      createdAt
      comments {
        id
        userId {
          id
          firstName
          lastName
          avatarImage
          username
        }
        postId
        body
        createdAt
      }
      likes {
        userId
        postId
        createdAt
      }
    }
  }
`;

export const GET_NOTIFICATIONS = gql`
  {
    getNotifications {
      id
      creator {
        id
        firstName
        lastName
        avatarImage
        username
      }
      notifier {
        id
        firstName
        lastName
        avatarImage
        username
      }
      action
      actionId {
        id
      }
      createdAt
    }
  }
`;

export const NEW_NOTIFICATION = gql`
  subscription {
    newNotification {
      id
      creator {
        id
        firstName
        lastName
        avatarImage
        username
      }
      notifier {
        id
        firstName
        lastName
        avatarImage
        username
      }
      action
      actionId {
        id
      }
      createdAt
    }
  }
`;
export const DELETE_NOTIFICATION = gql`
  subscription {
    deleteNotification
  }
`;

export const GET_URL_POSTS = gql`
  query getUrlPosts($username: String!) {
    getUrlPosts(username: $username) {
      id
      userId {
        id
        firstName
        lastName
        avatarImage
        username
      }
      body
      image
      createdAt
      comments {
        id
        userId {
          id
          firstName
          lastName
          avatarImage
          username
        }
        postId
        body
        createdAt
      }
      likes {
        userId
        postId
        createdAt
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($body: String, $image: String) {
    createPost(body: $body, image: $image) {
      id
      userId {
        id
        firstName
        lastName
        avatarImage
        username
      }
      body
      image
      createdAt
      comments {
        id
        userId {
          id
          firstName
          lastName
          avatarImage
          username
        }
        postId
        body
        createdAt
      }
      likes {
        userId
        postId
        createdAt
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      userId {
        id
        firstName
        lastName
        avatarImage
        username
      }
      postId
      body
      createdAt
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        userId
        postId
        createdAt
      }
    }
  }
`;

export const ADD_WORKPLACE = gql`
  mutation addWorkplace($body: String!) {
    addWorkplace(body: $body) {
      id
      workPlace
    }
  }
`;

export const DELETE_WORKPLACE = gql`
  mutation {
    deleteWorkplace {
      id
      workPlace
    }
  }
`;

export const ADD_SCHOOL = gql`
  mutation addSchool($body: String!) {
    addSchool(body: $body) {
      id
      school
    }
  }
`;

export const DELETE_SCHOOL = gql`
  mutation {
    deleteSchool {
      id
      school
    }
  }
`;

export const ADD_GENDER = gql`
  mutation addGender($gender: String!) {
    addGender(gender: $gender) {
      id
      gender
    }
  }
`;

export const DELETE_GENDER = gql`
  mutation {
    deleteGender {
      id
      gender
    }
  }
`;

export const ADD_BIRTHDAY = gql`
  mutation addBirthday($birthday: String!) {
    addBirthday(birthday: $birthday) {
      id
      birthday
    }
  }
`;

export const DELETE_BIRTHDAY = gql`
  mutation {
    deleteBirthday {
      id
      birthday
    }
  }
`;

export const DELETE_HOMEPLACE = gql`
  mutation {
    deleteHomeplace {
      id
      homePlace
    }
  }
`;

export const ADD_HOMEPLACE = gql`
  mutation addHomeplace($homePlace: String!) {
    addHomeplace(homePlace: $homePlace) {
      id
      homePlace
    }
  }
`;

export const DELETE_IMAGE = gql`
  mutation deleteImage($publicId: String!) {
    deleteImage(publicId: $publicId)
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($notifier: String!) {
    addFriend(notifier: $notifier) {
      creator {
        firstName
        lastName
        avatarImage
      }
      notifier {
        firstName
        lastName
        avatarImage
      }
      action
      status
    }
  }
`;

export const ACCEPT_FRIEND = gql`
  mutation acceptFriend($creator: String!) {
    acceptFriend(creator: $creator) {
      creator {
        firstName
        lastName
        avatarImage
      }
      notifier {
        firstName
        lastName
        avatarImage
      }
      action
      status
    }
  }
`;

export const REJECT_FRIEND = gql`
  mutation rejectFriend($creator: String!) {
    rejectFriend(creator: $creator)
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($creator: String!) {
    removeFriend(creator: $creator) {
      id
      friends {
        id
        firstName
        lastName
        avatarImage
        username
      }
    }
  }
`;

export const GET_SINGLE_NOTIFICATION = gql`
  query getSingleNotification($urlUser: String!) {
    getSingleNotification(urlUser: $urlUser) {
      id
      creator {
        id
        firstName
        lastName
        avatarImage
      }
      notifier {
        id
        firstName
        lastName
        avatarImage
      }
      action
      status
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation createMessage($notifier: String!, $body: String!, $threadId: ID!) {
    createMessage(notifier: $notifier, body: $body, threadId: $threadId) {
      id
      creator {
        id
        firstName
        lastName
        avatarImage
      }
      notifier {
        id
        firstName
        lastName
        avatarImage
      }
      body
      createdAt
    }
  }
`;

export const NEW_MESSAGE = gql`
  subscription newMessage($notifierId: String!) {
    newMessage(notifierId: $notifierId) {
      id
      creator {
        id
        firstName
        lastName
        avatarImage
      }
      notifier {
        id
        firstName
        lastName
        avatarImage
      }
      body
      createdAt
    }
  }
`;

export const GET_CONVERSATIONS = gql`
  {
    getConversations {
      _id
      participantsIds
      latestMessage {
        creator {
          _id
          firstName
          lastName
          avatarImage
        }
        notifier {
          _id
          firstName
          lastName
          avatarImage
        }
        body
        createdAt
      }
    }
  }
`;

export const CREATE_THREAD = gql`
  mutation createThread($urlUser: String!) {
    createThread(urlUser: $urlUser) {
      id
      participantsIds
      createdAt
    }
  }
`;

export const GET_THREAD = gql`
  query getThread($urlUser: String) {
    getThread(urlUser: $urlUser) {
      id
      participantsIds
      createdAt
    }
  }
`;

export const GET_SINGLE_CHAT = gql`
  query getSingleChat($threadId: String) {
    getSingleChat(threadId: $threadId) {
      id
      creator {
        id
        firstName
        lastName
        avatarImage
      }
      notifier {
        id
        firstName
        lastName
        avatarImage
      }
      body
      createdAt
    }
  }
`;

export const GET_NEWSFEED = gql`
  {
    getNewsfeed {
      id
      userId {
        id
        firstName
        lastName
        avatarImage
        username
      }
      body
      image
      createdAt
      comments {
        id
        userId {
          id
          firstName
          lastName
          avatarImage
          username
        }
        postId
        body
        createdAt
      }
      likes {
        userId
        postId
        createdAt
      }
    }
  }
`;

export const NEW_POST = gql`
  subscription {
    newPost {
      id
      userId {
        id
        firstName
        lastName
        avatarImage
        username
      }
      body
      image
      createdAt
      comments {
        id
        userId {
          id
          firstName
          lastName
          avatarImage
          username
        }
        postId
        body
        createdAt
      }
      likes {
        userId
        postId
        createdAt
      }
    }
  }
`;

export const OPEN_CHAT = gql`
  {
    chat @client {
      visible
      user {
        firstName
        lastName
        avatarImage
        id
      }
    }
  }
`;

export const GET_USERS = gql`
  {
    getUsers {
      id
      firstName
      avatarImage
      lastName
      username
    }
  }
`;

export const CHANGE_AVATAR_IMAGE = gql`
  mutation changeAvatarImage($avatarImage: String!) {
    changeAvatarImage(avatarImage: $avatarImage) {
      id
      avatarImage
    }
  }
`;

export const CHANGE_COVER_IMAGE = gql`
  mutation changeCoverImage($coverImage: String!) {
    changeCoverImage(coverImage: $coverImage) {
      id
      coverImage
    }
  }
`;
