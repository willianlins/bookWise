import * as Dialog from '@radix-ui/react-dialog'

export function ModalEbook(){
  return (
      <Dialog.Portal>
        <Dialog.Overlay/>
        <h1>TESTE</h1>
        <Dialog.Content >
          <Dialog.Close asChild>
            <button>close</button>
          </Dialog.Close>
        </Dialog.Content>

      </Dialog.Portal>
  )
}
