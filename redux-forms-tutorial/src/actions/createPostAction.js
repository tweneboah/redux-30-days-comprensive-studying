export default function createPost(values) {
    return {
        type: 'CREATE',
        payload: values
    }
}