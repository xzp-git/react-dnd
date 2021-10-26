import {useRef} from "react";
import { useDrag } from "./react-dnd";
import { CARD } from './ItemTypes';
const style = {
  backgroundColor: 'red',
  padding:'5px',
  margin:'5px',
  border:'1px dashed gray',
  cursor:'move'
}


export default function Card({id, text, index, moveCard}){
  let ref = useRef();//{current:null} div生成真实DOM后，会把DOM赋给ref.current

  // let [, drop] = useDrop({
  //   accept:CARD,
  //   collect:() => ({}),
  //   hover(item, monitor){
  //     //获取被拖动的卡片的索引 0
  //     const dragIndex = item.index

  //     //当前正在hover卡片的索引
  //     const hoverIndex = index
  //     if(dragIndex === hoverIndex){
  //       return
  //     }
  //     const { top, bottom } = ref.current.getBoundingClientRect();
  //     const halfOfHoverHeight = (bottom - top) / 2;
  //     const { y } = monitor.getClientOffset();//event.clientY
  //     const hoverClientY = y - top;
  //     if ((dragIndex < hoverIndex && hoverClientY > halfOfHoverHeight)
  //         || (dragIndex > hoverIndex && hoverClientY < halfOfHoverHeight)
  //     ) {
  //         moveCard(dragIndex, hoverIndex);
  //         item.index = hoverIndex;
  //     }
  //   }
  // })



  //useDrag hook提供一种将组件作为拖动源连接到 React DnD 系统中的方法

  let [{isDragging}, drag] = useDrag({
    type:CARD,
    //必需的是一个函数或者说对象, 他是一个用于描述拖动源的普通JS对象
    //收集功能，用来收集属性的，返回一个JS对象，并且返回值会合并到你的组件属性中
    item: () => ({id, index}),
    //monitor 里面存放的是一些拖动的状态，当拖动状态发生变化时通知组件重新获取 属性并进行刷新组件
    collect:(monitor) => ({
      isDragging:monitor.isDragging()
    })
  })
  const opacity = isDragging ? .3 : 1
  drag(ref)
  // drop(ref)
  return (
    <div ref={ref}  style={{...style, opacity}}>
      {text}
    </div>
  )
}