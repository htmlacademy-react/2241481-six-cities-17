import { UserType } from './reivew-type';

type CommentType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
}


export default CommentType;
