import {Imac, AppleWatch, IpadPro, AppleOne, AppleFitness} from '../assets/index'

export default function ModularSection() {
  return (
  <section className="modular-section">
      <img src={AppleWatch} alt={'apple watch'}/>
      <img src={IpadPro} alt={'apple ipad pro'}/>
      <img src={Imac} alt={'apple iMac'}/>
      <img src={AppleOne} alt={'apple one'}/>
      <img src={AppleFitness} alt={'apple fitness'} style={{width: '85vw', margin: '50px auto'}}/>
  </section>);
}
