import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay } from './styles'

export function LoginModal(){
  return(
    <Dialog.Portal>
      <Overlay />
        <Content>

        </Content>
        </Dialog.Portal>
  )
}
