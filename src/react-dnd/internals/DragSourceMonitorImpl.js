

class DragSourceMonitorImpl{
  constructor(manager){
    this.internalMonitor = manager.getGlobalMonitor()
  }
}

export default DragSourceMonitorImpl;
/**
 * 全局
 * 某个源或目标的
 * 某个源的监听 器会有一个内部指针指向全局监听器
 */