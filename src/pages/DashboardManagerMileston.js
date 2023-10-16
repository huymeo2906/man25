import { useState, useCallback } from "react";
import SettingCollumn from "../components/SettingCollumn";
import PortalPopup from "../components/PortalPopup";
import ChiTitCngVicDefault from "../components/ChiTitCngVicDefault";
import styles from "./DashboardManagerMileston.module.css";

const DashboardManagerMileston = () => {
  const [isSettingCollumnOpen, setSettingCollumnOpen] = useState(false);
  const [isChiTitCngVicDefaultOpen, setChiTitCngVicDefaultOpen] =
    useState(false);
  const [isChiTitCngVicDefault1Open, setChiTitCngVicDefault1Open] =
    useState(false);
  const [isChiTitCngVicDefault2Open, setChiTitCngVicDefault2Open] =
    useState(false);

  const openSettingCollumn = useCallback(() => {
    setSettingCollumnOpen(true);
  }, []);

  const closeSettingCollumn = useCallback(() => {
    setSettingCollumnOpen(false);
  }, []);

  const openChiTitCngVicDefault = useCallback(() => {
    setChiTitCngVicDefaultOpen(true);
  }, []);

  const closeChiTitCngVicDefault = useCallback(() => {
    setChiTitCngVicDefaultOpen(false);
  }, []);

  const openChiTitCngVicDefault1 = useCallback(() => {
    setChiTitCngVicDefault1Open(true);
  }, []);

  const closeChiTitCngVicDefault1 = useCallback(() => {
    setChiTitCngVicDefault1Open(false);
  }, []);

  const openChiTitCngVicDefault2 = useCallback(() => {
    setChiTitCngVicDefault2Open(true);
  }, []);

  const closeChiTitCngVicDefault2 = useCallback(() => {
    setChiTitCngVicDefault2Open(false);
  }, []);

  const onIconButtonContainerClick = useCallback(() => {
    // Please sync "Dashboard / Nhân viên" to the project
  }, []);

  return (
    <>
      <div className={styles.dashboardManagerMileston}>
        <div className={styles.dashboardManagerMilestonInner}>
          <div className={styles.frameParent}>
            <div className={styles.headerParent}>
              <div className={styles.header}>
                <div className={styles.flow1Parent}>
                  <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
                  <div className={styles.avt}>
                    <div className={styles.userpic} />
                    <div className={styles.state} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.overviewParent}>
                    <div className={styles.overview}>Overview</div>
                    <div className={styles.employees}>Employees</div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.memberParent}>
                    <div className={styles.member}>
                      <div className={styles.avt1}>
                        <div className={styles.userpic1} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>KA</div>
                      </div>
                      <div className={styles.avt2}>
                        <div className={styles.userpic2} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>NH</div>
                      </div>
                      <div className={styles.avt3}>
                        <div className={styles.userpic3} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>HN</div>
                      </div>
                      <div className={styles.avt4}>
                        <img
                          className={styles.ovalCopy3}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.wrapper}>
                          <div className={styles.div}>+3</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.input}>
                      <div className={styles.usearchParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                               <input
                                 type="text"
                                 placeholder="Search..."
                                 value={query}
                                 onChange={handleSearch}
                               />
                      </div>
                      <img
                        className={styles.uangleDownIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.uplusWrapper}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uplus.svg"
                    />
                  </div>
                  <div className={styles.memberParent}>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/ucommentdots.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/unotifiacation.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.unsplashfgUd73uZmWrapper}>
                      <img
                        className={styles.unsplashfgUd73uZmIcon}
                        alt=""
                        src="/unsplashfg-ud73u-zm@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.filterParent}>
                  <div className={styles.filter}>
                    <div className={styles.ufilterParent}>
                      <img
                        className={styles.ufilterIcon}
                        alt=""
                        src="/ufilter.svg"
                      />
                      <div className={styles.bLc}>Bộ lọc</div>
                    </div>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.layout}>
                    <div className={styles.project}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.bLc}>List</div>
                      </div>
                      <img
                        className={styles.downIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                        onClick={openSettingCollumn}
                      />
                    </div>
                    <div className={styles.project1}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.bLc}>Bảng</div>
                      </div>
                      <img
                        className={styles.downIcon1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.project1}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.bLc}>Lịch</div>
                      </div>
                      <img
                        className={styles.downIcon1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.project1}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.bLc}>Timeline</div>
                      </div>
                      <img
                        className={styles.downIcon1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.time}>
                    <div className={styles.usearchParent}>
                      <img
                        className={styles.container}
                        alt=""
                        src="/ucalendaralt.svg"
                      />
                      <div className={styles.spXpTheoParent}>
                        <div className={styles.spXpTheo}>Hiển thị</div>
                        <div className={styles.employees}>Ngày hôm nay</div>
                      </div>
                    </div>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uangledown.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.dngThiGianParent}>
                  <div className={styles.overview}>Dòng thời gian</div>
                  <div className={styles.frameParent1}>
                    <div className={styles.thng2Parent}>
                      <div className={styles.honThnhDatabase}>Tháng 2</div>
                      <div className={styles.honThnhDatabase}>Tháng 3</div>
                    </div>
                    <div className={styles.instanceParent}>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>8</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>9</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>10</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>11</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper5}>
                        <div className={styles.wrapper3}>
                          <div className={styles.div1}>12</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>13</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>14</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>15</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>16</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>17</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>18</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>19</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>20</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>21</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>22</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>23</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>24</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>1</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>2</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>3</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>4</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>29</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>8</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>8</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>8</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>8</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.container}>
                          <div className={styles.div1}>8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.groupItem} />
                  <div className={styles.groupInner} />
                  <div className={styles.blocks}>
                    <div className={styles.badge}>
                      <img
                        className={styles.dropdownIcon}
                        alt=""
                        src="/dropdown.svg"
                      />
                      <div className={styles.caption}>Phòng Phần mềm</div>
                    </div>
                    <div className={styles.badge1}>
                      <img
                        className={styles.dropdownIcon}
                        alt=""
                        src="/dropdown1.svg"
                      />
                      <div className={styles.caption}>Phòng Thiết kế</div>
                    </div>
                    <div className={styles.badge2}>
                      <img
                        className={styles.dropdownIcon}
                        alt=""
                        src="/dropdown1.svg"
                      />
                      <div className={styles.caption}>Phòng Kinh doanh</div>
                    </div>
                    <div className={styles.itemsBlue}>
                      <div className={styles.bgChartData} />
                      <div className={styles.progress}>
                        <div className={styles.div28} />
                        <div className={styles.div29} />
                        <div className={styles.div30} />
                        <div className={styles.div31} />
                        <div className={styles.div32} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body1}>Design Database</div>
                      </div>
                      <div className={styles.additionalCaption}>
                        <div className={styles.body11}>Roadmap Blue</div>
                      </div>
                      <img
                        className={styles.icons2}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsBlue1}>
                      <div className={styles.bgChartData1} />
                      <div className={styles.progress}>
                        <div className={styles.div28} />
                        <div className={styles.div29} />
                        <div className={styles.div30} />
                        <div className={styles.div31} />
                        <div className={styles.div32} />
                      </div>
                      <div className={styles.name}>
                        <b className={styles.body12}>
                          Purchasing Other Figma Kits
                        </b>
                      </div>
                      <div className={styles.additionalCaption1}>
                        <div className={styles.body11}>Roadmap Blue</div>
                      </div>
                      <img
                        className={styles.icons21}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsBlue2}>
                      <div className={styles.bgChartData1} />
                      <div className={styles.progress}>
                        <div className={styles.div28} />
                        <div className={styles.div29} />
                        <div className={styles.div30} />
                        <div className={styles.div31} />
                        <div className={styles.div32} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body12}>Workflow Boost</div>
                      </div>
                      <div className={styles.additionalCaption1}>
                        <div className={styles.body11}>Roadmap Blue</div>
                      </div>
                      <img
                        className={styles.icons21}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsGreen}>
                      <div className={styles.bgChartData} />
                      <div className={styles.progress}>
                        <div className={styles.div43} />
                        <div className={styles.div44} />
                        <div className={styles.div45} />
                        <div className={styles.div46} />
                        <div className={styles.div47} />
                      </div>
                      <div className={styles.additionalCaption3}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <div className={styles.name3}>
                        <div className={styles.body1}>
                          Charts Design System integration
                        </div>
                      </div>
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsGreen1}>
                      <div className={styles.bgChartData4} />
                      <div className={styles.progress4}>
                        <div className={styles.div43} />
                        <div className={styles.div49} />
                        <div className={styles.div50} />
                        <div className={styles.div51} />
                        <div className={styles.div52} />
                      </div>
                      <div className={styles.additionalCaption3}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <div className={styles.name4}>
                        <div className={styles.body12}>
                          Premium Charts Release
                        </div>
                      </div>
                      <img
                        className={styles.icons21}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsGreen2}>
                      <div className={styles.bgChartData5} />
                      <div className={styles.progress}>
                        <div className={styles.div43} />
                        <div className={styles.div44} />
                        <div className={styles.div50} />
                        <div className={styles.div46} />
                        <div className={styles.div47} />
                      </div>
                      <div className={styles.additionalCaption3}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <div className={styles.name5}>
                        <div className={styles.body1}>
                          Material Minimal Theme
                        </div>
                      </div>
                      <img
                        className={styles.icons2}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsGreen3}>
                      <div className={styles.bgChartData5} />
                      <div className={styles.progress6}>
                        <div className={styles.div58} />
                        <div className={styles.div59} />
                        <div className={styles.div60} />
                        <div className={styles.div61} />
                        <div className={styles.div62} />
                      </div>
                      <div className={styles.additionalCaption3}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <div className={styles.name5}>
                        <div className={styles.body1}>Android Design Kit</div>
                      </div>
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsGreen4}>
                      <div className={styles.bgChartData} />
                      <div className={styles.progress}>
                        <div className={styles.div43} />
                        <div className={styles.div44} />
                        <div className={styles.div45} />
                        <div className={styles.div46} />
                        <div className={styles.div47} />
                      </div>
                      <div className={styles.additionalCaption3}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <div className={styles.name3}>
                        <div className={styles.body115}>
                          Self Service AR System
                        </div>
                      </div>
                      <img
                        className={styles.icons21}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsAmber}>
                      <div className={styles.bgChartData} />
                      <div className={styles.progress}>
                        <div className={styles.div68} />
                        <div className={styles.div69} />
                        <div className={styles.div70} />
                        <div className={styles.div71} />
                        <div className={styles.div72} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body1}>Dashboard MVP Deploy</div>
                      </div>
                      <div className={styles.additionalCaption}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsAmber1}>
                      <div className={styles.bgChartData9} />
                      <div className={styles.progress}>
                        <div className={styles.div68} />
                        <div className={styles.div69} />
                        <div className={styles.div70} />
                        <div className={styles.div71} />
                        <div className={styles.div72} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body12}>Finished!</div>
                      </div>
                      <div className={styles.additionalCaption1}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <img
                        className={styles.icons2}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsAmber2}>
                      <div className={styles.bgChartData5} />
                      <div className={styles.progress}>
                        <div className={styles.div68} />
                        <div className={styles.div69} />
                        <div className={styles.div70} />
                        <div className={styles.div71} />
                        <div className={styles.div72} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body1}>Prototyping</div>
                      </div>
                      <div className={styles.additionalCaption}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <img
                        className={styles.icons2}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsAmber3}>
                      <div className={styles.bgChartData} />
                      <div className={styles.progress11}>
                        <div className={styles.div83} />
                        <div className={styles.div84} />
                        <div className={styles.div85} />
                        <div className={styles.div86} />
                        <div className={styles.div87} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body1}>
                          Backup Database Constantly
                        </div>
                      </div>
                      <div className={styles.additionalCaption}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <img
                        className={styles.icons21}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsAmber4}>
                      <div className={styles.bgChartData12} />
                      <div className={styles.progress}>
                        <div className={styles.div68} />
                        <div className={styles.div69} />
                        <div className={styles.div70} />
                        <div className={styles.div71} />
                        <div className={styles.div72} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body1}>Fits for Dashboard</div>
                      </div>
                      <div className={styles.additionalCaption}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                    </div>
                    <div className={styles.itemsPurple}>
                      <div className={styles.bgChartData12} />
                      <div className={styles.progress13}>
                        <div className={styles.div93} />
                        <div className={styles.div94} />
                        <div className={styles.div95} />
                        <div className={styles.div96} />
                        <div className={styles.div97} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body1}>Dashboard MVP Deploy</div>
                      </div>
                      <div className={styles.additionalCaption}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                    </div>
                    <div className={styles.itemsAmber5}>
                      <div className={styles.bgChartData12} />
                      <div className={styles.progress}>
                        <div className={styles.div68} />
                        <div className={styles.div69} />
                        <div className={styles.div70} />
                        <div className={styles.div71} />
                        <div className={styles.div72} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body1}>
                          Backup Database Constantly
                        </div>
                      </div>
                      <div className={styles.additionalCaption}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <img
                        className={styles.icons21}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsRed}>
                      <div className={styles.bgChartData} />
                      <div className={styles.progress}>
                        <div className={styles.div103} />
                        <div className={styles.div104} />
                        <div className={styles.div105} />
                        <div className={styles.div106} />
                        <div className={styles.div107} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body115}>Purchase now</div>
                      </div>
                      <div className={styles.additionalCaption}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsRed1}>
                      <div className={styles.bgChartData16} />
                      <div className={styles.progress}>
                        <div className={styles.div103} />
                        <div className={styles.div104} />
                        <div className={styles.div105} />
                        <div className={styles.div106} />
                        <div className={styles.div107} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body12}>Oooh, no!</div>
                      </div>
                      <div className={styles.additionalCaption1}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <img
                        className={styles.icons21}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsPurple1}>
                      <div className={styles.bgChartData5} />
                      <div className={styles.progress}>
                        <div className={styles.div113} />
                        <div className={styles.div114} />
                        <div className={styles.div115} />
                        <div className={styles.div116} />
                        <div className={styles.div117} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body1}>Charts Kit in Fi...</div>
                      </div>
                      <div className={styles.additionalCaption}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                    </div>
                    <div className={styles.itemsPurple2}>
                      <div className={styles.bgChartData18} />
                      <div className={styles.progress}>
                        <div className={styles.div113} />
                        <div className={styles.div114} />
                        <div className={styles.div115} />
                        <div className={styles.div116} />
                        <div className={styles.div117} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body12}>
                          Material Design Components
                        </div>
                      </div>
                      <div className={styles.additionalCaption1}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <img
                        className={styles.icons21}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons115}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.itemsPurple3}>
                      <div className={styles.bgChartData18} />
                      <div className={styles.progress}>
                        <div className={styles.div113} />
                        <div className={styles.div114} />
                        <div className={styles.div115} />
                        <div className={styles.div116} />
                        <div className={styles.div117} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.body12}>GUI</div>
                      </div>
                      <div className={styles.additionalCaption1}>
                        <div className={styles.body11}>additional caption</div>
                      </div>
                      <img
                        className={styles.icons21}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.icons115}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.flags}>
                      <div className={styles.flag}>
                        <div className={styles.flagBg} />
                        <div className={styles.leftLabel}>
                          <div className={styles.caption3}>
                            <span className={styles.captionTxt}>
                              <span>06/03</span>
                              <span className={styles.span}>{` · `}</span>
                              <span className={styles.mobileAppReleased}>
                                Mobile app released
                              </span>
                            </span>
                          </div>
                        </div>
                        <img
                          className={styles.iconRight}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <img
                        className={styles.lineDottedIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.flag1}>
                        <div className={styles.flagBg} />
                        <div className={styles.leftLabel}>
                          <div className={styles.caption3}>
                            <span className={styles.captionTxt}>
                              <span>06/03</span>
                              <span className={styles.span}>{` · `}</span>
                              <span className={styles.mobileAppReleased}>
                                Desktop app released
                              </span>
                            </span>
                          </div>
                        </div>
                        <img
                          className={styles.iconRight}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <img
                        className={styles.lineDottedIcon1}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.flag2}>
                        <div className={styles.flagBg} />
                        <div className={styles.leftLabel}>
                          <div className={styles.caption3}>
                            <span className={styles.captionTxt}>
                              <span>09/03</span>
                              <span className={styles.span}>{` · `}</span>
                              <span className={styles.mobileAppReleased}>
                                Out for review
                              </span>
                            </span>
                          </div>
                        </div>
                        <img
                          className={styles.iconRight}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <img
                        className={styles.lineDottedIcon2}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.flag3}>
                        <div className={styles.flagBg} />
                        <div className={styles.leftLabel}>
                          <div className={styles.caption3}>
                            <span className={styles.captionTxt}>
                              <span>06/11</span>
                              <span className={styles.span}>{` · `}</span>
                              <span className={styles.mobileAppReleased}>
                                New Program Launched
                              </span>
                            </span>
                          </div>
                        </div>
                        <img
                          className={styles.iconRight}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <img
                        className={styles.lineDottedIcon3}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div
                    className={styles.rectangleGroup}
                    onClick={openChiTitCngVicDefault}
                  >
                    <div className={styles.frameChild} />
                    <div className={styles.headerParent}>
                      <div className={styles.honThnhDatabase}>
                        Hoàn thành Database
                      </div>
                      <div className={styles.htHn2002}>Hết hạn 20/02</div>
                    </div>
                  </div>
                  <div
                    className={styles.rectangleContainer}
                    onClick={openChiTitCngVicDefault1}
                  >
                    <div className={styles.frameItem} />
                    <div className={styles.headerParent}>
                      <div className={styles.honThnhDatabase}>
                        Hoàn thành Mockup
                      </div>
                      <div className={styles.htHn2002}>Hết hạn 20/02</div>
                    </div>
                  </div>
                  <div
                    className={styles.rectangleParent1}
                    onClick={openChiTitCngVicDefault2}
                  >
                    <div className={styles.frameInner} />
                    <div className={styles.headerParent}>
                      <div className={styles.honThnhDatabase}>
                        Setup Marketing cơ bản
                      </div>
                      <div className={styles.htHn20022}>Hết hạn 20/02</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.danhSchWrapper}>
                  <div className={styles.overview}>Danh sách</div>
                </div>
                <div className={styles.instanceGroup}>
                  <div className={styles.frameWrapper28}>
                    <div className={styles.memberParent}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.headerParent}>
                        <div className={styles.honThnhDatabase}>Mục tiêu 1</div>
                        <div className={styles.htHn2002}>20/02</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper28}>
                    <div className={styles.memberParent}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.headerParent}>
                        <div className={styles.honThnhDatabase}>Mục tiêu 2</div>
                        <div className={styles.htHn2002}>20/02</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper28}>
                    <div className={styles.memberParent}>
                      <div className={styles.frameItem} />
                      <div className={styles.headerParent}>
                        <div className={styles.honThnhDatabase}>
                          Hoàn thành Mockup
                        </div>
                        <div className={styles.htHn2002}>20/02</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper28}>
                    <div className={styles.memberParent}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.headerParent}>
                        <div className={styles.honThnhDatabase}>Mục tiêu 4</div>
                        <div className={styles.htHn2002}>20/02</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper28}>
                    <div className={styles.memberParent}>
                      <div className={styles.frameInner} />
                      <div className={styles.headerParent}>
                        <div className={styles.honThnhDatabase}>
                          Setup Marketing cơ bản
                        </div>
                        <div className={styles.htHn20022}>20/02</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper28}>
                    <div className={styles.memberParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.headerParent}>
                        <div className={styles.honThnhDatabase}>
                          Hoàn thành Database
                        </div>
                        <div className={styles.employees}>20/02</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper28}>
                    <div className={styles.memberParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.headerParent}>
                        <div className={styles.honThnhDatabase}>Mục tiêu 7</div>
                        <div className={styles.employees}>20/02</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper28}>
                    <div className={styles.memberParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.headerParent}>
                        <div className={styles.honThnhDatabase}>Mục tiêu 8</div>
                        <div className={styles.employees}>20/02</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.uplusParent}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uplus1.svg"
                    />
                    <div className={styles.honThnhDatabase}>Thêm Milestone</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuMini}>
            <div className={styles.frameParent3}>
              <div className={styles.uangleDoubleRightWrapper}>
                <img
                  className={styles.container}
                  alt=""
                  src="/uangledoubleright.svg"
                />
              </div>
              <div className={styles.iconButtonParent}>
                <div
                  className={styles.iconButton}
                  onClick={onIconButtonContainerClick}
                >
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uhomealt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ulistul.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usuitcase.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ufilemedicalalt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usitemap.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uusersalt.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.uangleDoubleRightWrapper}>
              <img className={styles.container} alt="" src="/usetting.svg" />
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-1.svg"
            />
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
              <div className={styles.trangChParent}>
                <div className={styles.overview}>Trang chủ</div>
                <div className={styles.frameParent4}>
                  <div className={styles.mennuParent}>
                    <div className={styles.mennu}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/ucreatedashboard.svg"
                      />
                      <div className={styles.hmNayWrapper}>
                        <div className={styles.hmNay}>Dashboard</div>
                      </div>
                      <img
                        className={styles.uangleRightIcon1}
                        alt=""
                        src="/uangleright1.svg"
                      />
                    </div>
                    <div className={styles.frameParent5}>
                      <div className={styles.frameParent6}>
                        <div className={styles.downParent}>
                          <img
                            className={styles.downIcon4}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.thiGianWrapper}>
                            <div className={styles.honThnhDatabase}>
                              Thời gian
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameWrapper36}>
                          <div className={styles.menuFilterParent}>
                            <div className={styles.menuFilter}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.uclockIcon}
                                  alt=""
                                  src="/oval-copy-3.svg"
                                />
                                <div className={styles.search}>Hôm nay</div>
                              </div>
                              <div className={styles.wrapper26}>
                                <div className={styles.honThnhDatabase}>06</div>
                              </div>
                            </div>
                            <div className={styles.menuFilter1}>
                              <div className={styles.ufilterParent}>
                                <img
                                  className={styles.uclockIcon}
                                  alt=""
                                  src="/oval-copy-3.svg"
                                />
                                <div className={styles.bLc}>Tuần này</div>
                              </div>
                              <div className={styles.wrapper26}>
                                <div className={styles.honThnhDatabase}>06</div>
                              </div>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                            </div>
                            <div className={styles.menuFilter}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.uclockIcon}
                                  alt=""
                                  src="/oval-copy-3.svg"
                                />
                                <div className={styles.search}>Tháng này</div>
                              </div>
                              <div className={styles.wrapper26}>
                                <div className={styles.honThnhDatabase}>06</div>
                              </div>
                            </div>
                            <div className={styles.tab}>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <div className={styles.input1}>
                                <div className={styles.hmNayWrapper}>
                                  <div className={styles.label4}>Tùy chọn</div>
                                  <div className={styles.pointer} />
                                </div>
                                <img
                                  className={styles.uclockIcon}
                                  alt=""
                                  src="/oval-copy-3.svg"
                                />
                                <img
                                  className={styles.outlineClose}
                                  alt=""
                                  src="/oval-copy-3.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent7}>
                        <div className={styles.downParent}>
                          <img
                            className={styles.downIcon4}
                            alt=""
                            src="/down.svg"
                          />
                          <div className={styles.thiGianWrapper}>
                            <div className={styles.honThnhDatabase}>
                              Hiển thị theo
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameWrapper36}>
                          <div className={styles.menuFilterGroup}>
                            <div className={styles.menuFilter3}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.uclockIcon}
                                  alt=""
                                  src="/userveralt.svg"
                                />
                                <div className={styles.search}>Công việc</div>
                              </div>
                              <div className={styles.wrapper26}>
                                <div className={styles.honThnhDatabase}>06</div>
                              </div>
                            </div>
                            <div className={styles.menuFilter4}>
                              <div className={styles.ufilterParent}>
                                <img
                                  className={styles.uclockIcon}
                                  alt=""
                                  src="/ufilemedicalalt1.svg"
                                />
                                <div className={styles.bLc}>Dự án</div>
                              </div>
                              <div className={styles.wrapper26}>
                                <div className={styles.honThnhDatabase}>06</div>
                              </div>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/ucheck.svg"
                              />
                            </div>
                            <div className={styles.menuFilter4}>
                              <div className={styles.ufilterParent}>
                                <img
                                  className={styles.uclockIcon}
                                  alt=""
                                  src="/uclipboardalt.svg"
                                />
                                <div className={styles.bLc}>Panoee</div>
                              </div>
                              <div className={styles.wrapper26}>
                                <div className={styles.honThnhDatabase}>06</div>
                              </div>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/ucheck.svg"
                              />
                            </div>
                            <div className={styles.menuFilter3}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.uclockIcon}
                                  alt=""
                                  src="/uparcel.svg"
                                />
                                <div className={styles.search}>Resource</div>
                              </div>
                              <div className={styles.wrapper26}>
                                <div className={styles.honThnhDatabase}>06</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent6}>
                        <div className={styles.downParent}>
                          <img
                            className={styles.downIcon4}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.thiGianWrapper}>
                            <div className={styles.honThnhDatabase}>
                              Phòng ban
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameWrapper36}>
                          <div className={styles.menuFilterGroup}>
                            <div className={styles.menuFilter3}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.uclockIcon}
                                  alt=""
                                  src="/oval-copy-3.svg"
                                />
                                <div className={styles.search}>
                                  Phòng phần mềm
                                </div>
                              </div>
                              <div className={styles.wrapper26}>
                                <div className={styles.honThnhDatabase}>06</div>
                              </div>
                            </div>
                            <div className={styles.menuFilter3}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.uclockIcon}
                                  alt=""
                                  src="/oval-copy-3.svg"
                                />
                                <div className={styles.search}>
                                  Phòng kế toán
                                </div>
                              </div>
                              <div className={styles.wrapper26}>
                                <div className={styles.honThnhDatabase}>06</div>
                              </div>
                            </div>
                            <div className={styles.menuFilter3}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.uclockIcon}
                                  alt=""
                                  src="/oval-copy-3.svg"
                                />
                                <div className={styles.search}>Marketing</div>
                              </div>
                              <div className={styles.wrapper26}>
                                <div className={styles.honThnhDatabase}>06</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/ulistuialt.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Việc của tôi</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon1}
                      alt=""
                      src="/uangleright2.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uchartline.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Báo cáo</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon1}
                      alt=""
                      src="/uangleright2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSettingCollumnOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSettingCollumn}
        >
          <SettingCollumn onClose={closeSettingCollumn} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefaultOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault1}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault1} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault2}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault2} />
        </PortalPopup>
      )}
    </>
  );
};

export default DashboardManagerMileston;
