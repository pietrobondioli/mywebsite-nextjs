// Styles
import styles from '../../../../styles/pages/About/SkillItem.module.scss';

const SkillsItem = (props) => {
  const { skillLink, skillName, skillImage } = props;
  return (
    <a href={skillLink} className={styles.skill} target="blank">
      <div className={styles.name}>{skillName}</div>
      <img className={styles.image} src={skillImage} alt={skillName} />
    </a>
  );
};

export default SkillsItem;
