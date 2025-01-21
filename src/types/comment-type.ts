import { UserType } from './reivew-type';

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
export type { PostCommentType };
