type UserType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type PostCommentType = {
  comment: string;
  rating: number;
}

type CommentType = PostCommentType & {
  id: string;
  date: string;
  user: UserType;
}

export default CommentType;
export type { PostCommentType, UserType };
