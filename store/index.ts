import { getPosts, getPostsBySearch } from '@/services/getPosts';
import {create} from 'zustand';

type usePosts = {
    posts: any[];
    loading: boolean;
    getPosts: ()=>Promise<void>;
    getPostsBySearch: (value: string)=>Promise<void>;
}

export const usePosts = create<usePosts>()((set)=>({
    posts: [],
    loading: false,
    getPosts: async () => {
        set({loading: true});
        const posts = await getPosts();
        set({posts, loading: false});
    },
    getPostsBySearch: async (search) => {
        set({loading: true});
        const posts = await getPostsBySearch(search);
        set({posts, loading: false});
    }

}))