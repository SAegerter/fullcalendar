import { h, StandardEvent, BaseComponent, MinimalEventProps } from '@fullcalendar/core'
import { DEFAULT_TABLE_EVENT_TIME_FORMAT } from './event-rendering'


export interface TableBlockEventProps extends MinimalEventProps {
  defaultDisplayEventEnd: boolean
}

export default class TableBlockEvent extends BaseComponent<TableBlockEventProps> {

  render(props: TableBlockEventProps) {
    return (
      <StandardEvent
        {...props}
        extraClassNames={[ 'fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event' ]}
        defaultTimeFormat={DEFAULT_TABLE_EVENT_TIME_FORMAT}
        defaultDisplayEventEnd={props.defaultDisplayEventEnd}
        disableResizing={!props.seg.eventRange.def.allDay}
      />
    )
  }

}