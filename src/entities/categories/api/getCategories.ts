import { pb } from '@shared/lib/pocketbase'

export async function getCategories() {
    const records = await pb.collection('categories').getFullList({
        sort: 'name',
         requestKey: null,
    })
    return records
}