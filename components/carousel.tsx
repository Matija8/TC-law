import useSize from '@react-hook/size';
import classNames from 'classnames';
import { lawyers } from 'data/employees';
import { useRef, useState } from 'react';
import { clamp } from 'util/helpers';
import styles from './carousel.module.scss';
import { Icons } from './icons';
import { EmployeeCard } from './employee-card';

const lrIconSize = 30;

export function EmployeeCarousel() {
  const carouselOuterRef = useRef<HTMLDivElement>(null);
  const [width] = useSize(carouselOuterRef);
  const [fstLawyerShownIndex, setFstLawyerShownIdx] = useState(0);
  const itemCount = lawyers.length;

  const take = (() => {
    const maxTakePossible = Math.min(3, itemCount);
    const prefferedTake = Math.floor((width - 20) / 250);
    return clamp(1, prefferedTake, maxTakePossible);
  })();
  const lastLawyerShownIdx = fstLawyerShownIndex + take - 1;

  // Old logic
  // In array [0,1,2,3,4,5]
  // if you want to show only [1,2] on carousel
  // render [0,1,2,3]
  // and make [0,3] display: none.
  // That way you want have jank when switching to next/prev

  // New
  // Render whole array, just keep display: none on the hidden

  const renderLRButtons = take < itemCount;

  return (
    <section className={styles.outer} ref={carouselOuterRef}>
      {renderLRButtons && (
        <LButton
          disabled={fstLawyerShownIndex < 1}
          onClick={() =>
            setFstLawyerShownIdx(Math.max(0, fstLawyerShownIndex - 1))
          }
        />
      )}
      <div className={styles.carousel}>
        {lawyers.map((lawyer, idx) => (
          // Render all employees, even hidden, to avoid jank
          <EmployeeCard
            employee={lawyer}
            key={lawyer.key}
            hide={idx < fstLawyerShownIndex || idx > lastLawyerShownIdx}
          />
        ))}
      </div>
      {renderLRButtons && (
        <RButton
          disabled={fstLawyerShownIndex >= lawyers.length - take}
          onClick={() =>
            setFstLawyerShownIdx(
              Math.min(lawyers.length - take, fstLawyerShownIndex + 1),
            )
          }
        />
      )}
    </section>
  );
}

function LButton({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <div className={styles['lr-arrow-container']}>
      <button
        aria-label="Go to previous carousel image"
        aria-disabled={disabled}
        className={classNames({
          [styles['lr-arrow']]: true,
          [styles.disabled]: disabled,
        })}
        onClick={() => !disabled && onClick()}
      >
        <Icons.Left size={lrIconSize} />
      </button>
    </div>
  );
}

function RButton({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <div className={styles['lr-arrow-container']}>
      <button
        aria-label="Go to next carousel image"
        aria-disabled={disabled}
        className={classNames({
          [styles['lr-arrow']]: true,
          [styles.disabled]: disabled,
        })}
        onClick={() => !disabled && onClick()}
      >
        <Icons.Right size={lrIconSize} />
      </button>
    </div>
  );
}

// TODO
// function LRButton({
//   disabled,
//   onClick,
//   ArrowIcon,
//   ariaLabel,
// }: {
//   disabled: boolean;
//   onClick: () => void;
//   ArrowIcon: typeof Icons.Left;
//   ariaLabel: string;
// }) {
//   return (
//     <div className={styles['lr-arrow-container']}>
//       <button
//         aria-label={ariaLabel}
//         aria-disabled={disabled}
//         className={classNames({
//           [styles['lr-arrow']]: true,
//           [styles.disabled]: disabled,
//         })}
//         onClick={() => !disabled && onClick()}
//       >
//         <ArrowIcon />
//       </button>
//     </div>
//   );
// }
