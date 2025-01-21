type UserType = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

type ReviewType = {
    id: string;
    date: string;
    user: UserType;
    comment: string;
    rating: number;
}

export default ReviewType;
export type {UserType};
