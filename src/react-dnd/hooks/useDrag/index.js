import useDragSourceMonitor from "./useDragSourceMonitor";

/**
 * 
 * sourceSpec 拖动源的规范对象
 */

function useDrag(spec) {
  
  const monitor = useDragSourceMonitor()
  console.log(monitor);
  return [{}, () => {}]
}

export default useDrag

/**
 * 
 * 在React Dnd应用中monitor 有两个级别
 * 1.全局monitor 只有一份
 * 2.拖动源或放置目标的monitor 每个源或者目标都有一份
 */