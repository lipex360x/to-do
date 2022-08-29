import { toast } from 'react-hot-toast'

const success = (content: string) => {
  return toast.success(content)
}

const error = (content: string) => {
  return toast.error(content)
}

const loading = (content: string) => {
  return toast.loading(content)
}

const dismiss = () => {
  toast.dismiss();
}

const promise = (promise: Promise<any>, content: string, success: string, error: string) => {
  toast.promise(promise, {
    loading: content,
    success,
    error,
  });
}

export default {
  success,
  error,
  loading,
  dismiss,
  promise
}
