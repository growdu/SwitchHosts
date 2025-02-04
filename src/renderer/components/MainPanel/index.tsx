/**
 * index
 * @author: oldj
 * @homepage: https://oldj.net
 */

import { useModel } from '@@/plugin-model/useModel'
import HostsEditor from '@renderer/components/Editor/HostsEditor'
import useOnBroadcast from '@renderer/core/useOnBroadcast'
import events from '@root/common/events'
import React from 'react'
import styles from './index.less'
import { useToast } from '@chakra-ui/react'

interface Props {}

const MainPanel = (props: Props) => {
  const toast = useToast()

  useOnBroadcast(events.cmd_run_result, (result) => {
    // console.log(result)
    if (!result.success) {
      toast({
        status: 'error',
        description: result.stderr || 'cmd run error',
        isClosable: true,
      })
    }
  })

  return (
    <div className={styles.root}>
      <HostsEditor />
    </div>
  )
}

export default MainPanel
