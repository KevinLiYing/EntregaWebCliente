import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createContact, getContacts } from '../services/contactApi'

export const contactsQueryKey = ['contacts']

export function useContacts() {
  const queryClient = useQueryClient()

  const contactsQuery = useQuery({
    queryKey: contactsQueryKey,
    queryFn: getContacts,
  })

  const createContactMutation = useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: contactsQueryKey })
    },
  })

  return {
    contacts: contactsQuery.data ?? [],
    isLoading: contactsQuery.isLoading,
    isError: contactsQuery.isError,
    error: contactsQuery.error,
    createContact: createContactMutation.mutateAsync,
    isCreating: createContactMutation.isPending,
    isCreateError: createContactMutation.isError,
    isCreateSuccess: createContactMutation.isSuccess,
    createError: createContactMutation.error,
  }
}
