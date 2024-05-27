import { useNavigate } from 'react-router-dom';
import { deletePostById } from '../api';
import { useMutation } from '@tanstack/react-query';

const useDeletePostById = () => {
  const navigate = useNavigate();

  const mutate = async ({ postId }: { postId: string }) => {
    const { data } = await deletePostById(postId);
    return data;
  };

  return useMutation({
    mutationFn: mutate,
    onSuccess: () => {
      navigate('/');
    },
    onError: () => {
      alert('게시글 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });
};

export default useDeletePostById;
