import React from 'react';
import styles from './index.css';
import ScrollBox from '../ScrollBox';
import { getDateDiff } from '../../utils/utils'

const response = {"exceptionDesc":"成功","returnValue":[{"effectiveDate":1561263319000,"uneffectualDate":1567353600000,"recruitNumber":2,"firstCategory":"技术类","secondCategory":"综合","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-23","positionId":70982,"departmentName":"阿里集团-阿里云智能事业群-云智能产品研发板块-基础产品事业部","workLocation":"杭州","gmtModified":1561263600000,"applyed":false,"favorited":false,"applyTimeDesc":"2小时前","expired":true,"code":"GP545922","name":"云智能基础产品事业部-产品用户体验和需求管理部-解决方案高级运营专家\t\t-杭州"},{"effectiveDate":1561263043000,"uneffectualDate":1568908800000,"recruitNumber":2,"firstCategory":"技术类","secondCategory":"开发","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-23","positionId":71757,"departmentName":"阿里集团-阿里云智能事业群-云智能产品研发板块-基础产品事业部-存储-Intelligent Storage","workLocation":"北京,杭州","gmtModified":1561263600000,"applyed":false,"favorited":false,"applyTimeDesc":"2小时前","expired":true,"code":"GP549827","name":"云智能基础产品事业部-存储-智能存储-移动端技术专家\/架构师\t-北京\/杭州"},{"effectiveDate":1561256099000,"uneffectualDate":1567180800000,"recruitNumber":1,"firstCategory":"技术类","secondCategory":"开发","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-23","positionId":71756,"departmentName":"阿里集团-阿里云智能事业群-云智能产品研发板块-IoT事业部","workLocation":"杭州","gmtModified":1561256400000,"applyed":false,"favorited":false,"applyTimeDesc":"4小时前","expired":true,"code":"GP549826","name":"阿里集团-阿里云智能事业群-云智能产品研发板块-IoT事业部-资深前端开发工程师"},{"effectiveDate":1561214829000,"uneffectualDate":1566576000000,"recruitNumber":1,"firstCategory":"市场拓展","secondCategory":"BD","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":70402,"departmentName":"阿里集团-阿里云智能事业群-云智能业务板块-数字政府业务部-政府公共服务业务部","workLocation":"杭州,北京","gmtModified":1561215000000,"applyed":false,"favorited":false,"applyTimeDesc":"15小时前","expired":true,"code":"GP543948","name":"阿里云智能-云业务经理-数字政府-文旅"},{"effectiveDate":1561183761000,"uneffectualDate":1568908800000,"recruitNumber":1,"firstCategory":"运营类","secondCategory":"行业运营","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":71752,"departmentName":"阿里集团-B类事业群-AliExpress-非标行业运营","workLocation":"杭州","gmtModified":1561185600000,"applyed":false,"favorited":false,"applyTimeDesc":"23小时前","expired":true,"code":"GP549331","name":"AliExpress-行业场域运营专家-杭州"},{"effectiveDate":1561183898000,"uneffectualDate":1568908800000,"recruitNumber":1,"firstCategory":"运营类","secondCategory":"内容运营","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":71753,"departmentName":"阿里集团-B类事业群-AliExpress-非标行业运营","workLocation":"杭州","gmtModified":1561185600000,"applyed":false,"favorited":false,"applyTimeDesc":"23小时前","expired":true,"code":"GP549726","name":"AliExpress-用户增长运营专家-杭州"},{"effectiveDate":1561184599000,"uneffectualDate":1567180800000,"recruitNumber":1,"firstCategory":"产品类","secondCategory":"用户型","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":71754,"departmentName":"阿里集团-盒马-盒马-产品技术部-数字化营运与经营产品","workLocation":"上海","gmtModified":1561185000000,"applyed":false,"favorited":false,"applyTimeDesc":"23小时前","expired":true,"code":"GP549628","name":"盒马-HR产品-上海"},{"effectiveDate":1561184887000,"uneffectualDate":1567180800000,"recruitNumber":1,"firstCategory":"综合类","secondCategory":"财务及内控","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":71755,"departmentName":"阿里集团-盒马-盒马-运营财务","workLocation":"上海","gmtModified":1561185000000,"applyed":false,"favorited":false,"applyTimeDesc":"23小时前","expired":true,"code":"GP549629","name":"盒马-应收经理-上海"},{"effectiveDate":1561173916000,"uneffectualDate":1568908800000,"recruitNumber":1,"firstCategory":"客服类","secondCategory":"业务分析与运营","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":64280,"departmentName":"菜鸟-客户运营中心-物流服务中台-服务产品运营&智能-产品&智能","workLocation":"杭州","gmtModified":1561176600000,"applyed":false,"favorited":false,"applyTimeDesc":"1天前","expired":true,"code":"GP512608","name":"菜鸟-智能服务产品运营专员\/专家"},{"effectiveDate":1561176278000,"uneffectualDate":1567180800000,"recruitNumber":2,"firstCategory":"运营类","secondCategory":"产品运营","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":60469,"departmentName":"蚂蚁金服-数字金融线-财富事业群-开放金融运营部-运营及业务支持部-余额宝用户经营","workLocation":"杭州","gmtModified":1561176600000,"applyed":false,"favorited":false,"applyTimeDesc":"1天前","expired":true,"code":"GP068498","name":"蚂蚁金服-余额宝用户深度运营专家\/高级专家-蚂蚁金服财富"},{"effectiveDate":1561176009000,"uneffectualDate":1564502400000,"recruitNumber":10,"firstCategory":"技术类","secondCategory":"算法","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":70226,"departmentName":"蚂蚁金服-数字金融线-财富事业群-财富技术部-智能服务组","workLocation":"北京,上海,杭州","gmtModified":1561176600000,"applyed":false,"favorited":false,"applyTimeDesc":"1天前","expired":true,"code":"GP543605","name":"蚂蚁金服-推荐\/营销算法专家\/高级专家-蚂蚁金服财富"},{"effectiveDate":1561173729000,"uneffectualDate":1568908800000,"recruitNumber":3,"firstCategory":"技术类","secondCategory":"数据","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":61822,"departmentName":"菜鸟-数据&规划部-供应链数据","workLocation":"杭州","gmtModified":1561176600000,"applyed":false,"favorited":false,"applyTimeDesc":"1天前","expired":true,"code":"GP069616","name":"菜鸟-数据仓库专家"},{"effectiveDate":1561173760000,"uneffectualDate":1568908800000,"recruitNumber":3,"firstCategory":"运营类","secondCategory":"规则管理","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":61874,"departmentName":"菜鸟-数据&规划部-规划运营","workLocation":"杭州","gmtModified":1561176600000,"applyed":false,"favorited":false,"applyTimeDesc":"1天前","expired":true,"code":"GP070652","name":"菜鸟-运营规划专家\/高级专家"},{"effectiveDate":1561173859000,"uneffectualDate":1568908800000,"recruitNumber":1,"firstCategory":"客服类","secondCategory":"综合管理","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":69556,"departmentName":"菜鸟-客户运营中心-物流服务中台","workLocation":"杭州","gmtModified":1561176600000,"applyed":false,"favorited":false,"applyTimeDesc":"1天前","expired":true,"code":"GP512028","name":"菜鸟-高级服务资源运营专家"},{"effectiveDate":1561176170000,"uneffectualDate":1564502400000,"recruitNumber":5,"firstCategory":"技术类","secondCategory":"算法","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":69557,"departmentName":"蚂蚁金服-数字金融线-财富事业群-财富技术部-余额宝及权益资产组","workLocation":"北京,杭州,上海","gmtModified":1561176600000,"applyed":false,"favorited":false,"applyTimeDesc":"1天前","expired":true,"code":"GP537810","name":"蚂蚁金服-算法专家-蚂蚁金服财富"},{"effectiveDate":1561173808000,"uneffectualDate":1568908800000,"recruitNumber":1,"firstCategory":"综合类","secondCategory":"财务及内控","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":63952,"departmentName":"菜鸟-CFO-结算&财务中心","workLocation":"杭州","gmtModified":1561176600000,"applyed":false,"favorited":false,"applyTimeDesc":"1天前","expired":true,"code":"GP507616","name":"菜鸟-结算方案专家-国际"},{"effectiveDate":1561176082000,"uneffectualDate":1568822400000,"recruitNumber":2,"firstCategory":"技术类","secondCategory":"数据","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":61422,"departmentName":"蚂蚁金服-数字金融线-财富事业群-数据部","workLocation":"杭州","gmtModified":1561176600000,"applyed":false,"favorited":false,"applyTimeDesc":"1天前","expired":true,"code":"GP070071","name":"蚂蚁金服-理财顾问数据资深产品专家-蚂蚁财富"},{"effectiveDate":1561176411000,"uneffectualDate":1561737600000,"recruitNumber":1,"firstCategory":"产品类","secondCategory":"商业型","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":66039,"departmentName":"蚂蚁金服-数字金融线-财富事业群-金融产品部-余额宝","workLocation":"杭州,上海","gmtModified":1561176600000,"applyed":false,"favorited":false,"applyTimeDesc":"1天前","expired":true,"code":"GP527108","name":"蚂蚁金服-余额宝产品专家（商业型偏后端交易）-蚂蚁金服财富"},{"effectiveDate":1561175404000,"uneffectualDate":1567180800000,"recruitNumber":2,"firstCategory":"产品类","secondCategory":"用户型","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":64783,"departmentName":"蚂蚁金服-数字金融线-财富事业群-金融产品部-余额宝","workLocation":"杭州","gmtModified":1561176001000,"applyed":false,"favorited":false,"applyTimeDesc":"1天前","expired":true,"code":"GP522304","name":"蚂蚁金服-余额宝产品经理-蚂蚁金服财富"},{"effectiveDate":1561175616000,"uneffectualDate":1561824000000,"recruitNumber":5,"firstCategory":"技术类","secondCategory":"算法","applyTimes":0,"favoriteTimes":0,"effectiveDateDesc":"2019-06-22","positionId":62871,"departmentName":"蚂蚁金服-数字金融线-财富事业群-财富技术部-智能服务组","workLocation":"杭州,上海,北京","gmtModified":1561176001000,"applyed":false,"favorited":false,"applyTimeDesc":"1天前","expired":true,"code":"GP072062","name":"蚂蚁金服-人工智能专家\/高级专家-蚂蚁财富"}],"isSuccess":true}

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: response.returnValue,
    }
  }

  componentDidMount() {
    // request()s
  }

  renderList = () => {
    const { list } = this.state;
    return (
      <ul>
        {
          list.map( item => (
            <li key={item.positionId} className={styles.item}>
              <a href="" className={styles.name}>{item.departmentName}</a>
              <span className={styles.base}>{'杭州'}</span>
              <span className={styles.time}>{getDateDiff(item.gmtModified)}</span>
            </li>)
          )
        }
      </ul>
    )
  }

  render() {
    return (
      <div className={styles.jobBox}>
        <div className={styles.jobHeader}>
          最新职位
          <a href="">更多</a>
        </div>
        <div className={styles.content}>
          <ScrollBox>
            { this.renderList() }
          </ScrollBox>
        </div>
      </div>
    );
  }
};

Search.propTypes = {
};
