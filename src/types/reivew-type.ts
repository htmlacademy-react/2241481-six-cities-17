type userType = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

type reviewType = {
    id: string;
    date: string;
    user: userType;
    comment: string;
    rating: number;
}

export default reviewType;
export type {userType};
