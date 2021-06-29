// Styles
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <svg
        width='164'
        height='32'
        viewBox='0 0 164 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0.32 31V4.92H6.48L9.04 14.16L9.92 17.76H10.08L10.96 14.16L13.52 4.92H19.68V31H14.72V22.92C14.72 22.2 14.7467 21.2933 14.8 20.2C14.8533 19.1067 14.92 17.9867 15 16.84C15.08 15.6933 15.16 14.5867 15.24 13.52C15.3467 12.4267 15.4267 11.5333 15.48 10.84H15.36L13.36 17.8L11.36 24.08H8.48L6.44 17.8L4.56 10.84H4.44C4.52 11.5333 4.6 12.4267 4.68 13.52C4.76 14.5867 4.84 15.6933 4.92 16.84C5 17.9867 5.06667 19.1067 5.12 20.2C5.17333 21.2933 5.2 22.2 5.2 22.92V31H0.32ZM60.2087 31V11.16H65.0087L65.4887 15.48H65.6087C66.5954 13.8533 67.7821 12.6533 69.1687 11.88C70.5554 11.08 72.0487 10.68 73.6487 10.68C74.5287 10.68 75.2354 10.7467 75.7687 10.88C76.3287 11.0133 76.9021 11.2133 77.4887 11.48L76.2887 16.4C75.6754 16.2133 75.1154 16.08 74.6087 16C74.1287 15.8933 73.5154 15.84 72.7687 15.84C71.5421 15.84 70.3287 16.2 69.1287 16.92C67.9554 17.64 66.9421 18.8933 66.0887 20.68V31H60.2087ZM96.3531 31.48C95.0465 31.48 93.7798 31.2533 92.5531 30.8C91.3531 30.32 90.2731 29.64 89.3131 28.76C88.3798 27.88 87.6331 26.8 87.0731 25.52C86.5131 24.2133 86.2331 22.7333 86.2331 21.08C86.2331 19.4267 86.5131 17.96 87.0731 16.68C87.6331 15.3733 88.3798 14.28 89.3131 13.4C90.2731 12.52 91.3531 11.8533 92.5531 11.4C93.7798 10.92 95.0465 10.68 96.3531 10.68C97.6598 10.68 98.9131 10.92 100.113 11.4C101.34 11.8533 102.42 12.52 103.353 13.4C104.313 14.28 105.073 15.3733 105.633 16.68C106.193 17.96 106.473 19.4267 106.473 21.08C106.473 22.7333 106.193 24.2133 105.633 25.52C105.073 26.8 104.313 27.88 103.353 28.76C102.42 29.64 101.34 30.32 100.113 30.8C98.9131 31.2533 97.6598 31.48 96.3531 31.48ZM96.3531 26.72C97.7131 26.72 98.7265 26.2133 99.3931 25.2C100.086 24.1867 100.433 22.8133 100.433 21.08C100.433 19.3467 100.086 17.9733 99.3931 16.96C98.7265 15.9467 97.7131 15.44 96.3531 15.44C94.9931 15.44 93.9665 15.9467 93.2731 16.96C92.6065 17.9733 92.2731 19.3467 92.2731 21.08C92.2731 22.8133 92.6065 24.1867 93.2731 25.2C93.9665 26.2133 94.9931 26.72 96.3531 26.72ZM124.977 31.48C123.191 31.48 121.444 31.1867 119.737 30.6C118.031 30.0133 116.537 29.2933 115.257 28.44L117.777 24.76C119.004 25.5333 120.284 26.12 121.617 26.52C122.951 26.92 124.337 27.12 125.777 27.12C126.871 27.12 127.671 26.96 128.177 26.64C128.684 26.32 128.937 25.92 128.937 25.44C128.937 25.1733 128.857 24.9333 128.697 24.72C128.564 24.5067 128.311 24.32 127.937 24.16C127.591 23.9733 127.097 23.8 126.457 23.64C125.817 23.48 125.017 23.2933 124.057 23.08C121.364 22.4933 119.431 21.7067 118.257 20.72C117.084 19.7067 116.497 18.4267 116.497 16.88C116.497 15.9733 116.711 15.1333 117.137 14.36C117.564 13.5867 118.164 12.9333 118.937 12.4C119.737 11.8667 120.697 11.4533 121.817 11.16C122.937 10.84 124.204 10.68 125.617 10.68C127.404 10.68 129.017 10.9733 130.457 11.56C131.924 12.12 133.177 12.7333 134.217 13.4L131.577 16.92C130.564 16.3067 129.511 15.84 128.417 15.52C127.324 15.2 126.217 15.04 125.097 15.04C124.164 15.04 123.471 15.1867 123.017 15.48C122.564 15.7733 122.337 16.1467 122.337 16.6C122.337 17.16 122.684 17.56 123.377 17.8C124.071 18.04 125.257 18.3467 126.937 18.72C128.457 19.0667 129.724 19.44 130.737 19.84C131.751 20.24 132.551 20.6933 133.137 21.2C133.724 21.7067 134.137 22.28 134.377 22.92C134.617 23.56 134.737 24.28 134.737 25.08C134.737 25.9867 134.524 26.8267 134.097 27.6C133.671 28.3733 133.044 29.0533 132.217 29.64C131.417 30.2 130.404 30.6533 129.177 31C127.977 31.32 126.577 31.48 124.977 31.48ZM144.802 31V2.96H150.682V9.84L150.362 13.64H150.482C151.229 12.8667 152.135 12.1867 153.202 11.6C154.269 10.9867 155.562 10.68 157.082 10.68C159.322 10.68 160.949 11.4 161.962 12.84C163.002 14.28 163.522 16.2533 163.522 18.76V31H157.642V19.52C157.642 18.1867 157.429 17.2133 157.002 16.6C156.575 15.9867 155.815 15.68 154.722 15.68C153.922 15.68 153.215 15.8533 152.602 16.2C152.015 16.5467 151.375 17.0667 150.682 17.76V31H144.802Z'
          fill='#272727'
        />
        <path
          d='M37.9044 31V15.76H29.9444V11.16H43.7844V31H37.9044ZM40.5844 8.04C39.4377 8.04 38.491 7.72 37.7444 7.08C37.0244 6.44 36.6644 5.57333 36.6644 4.48C36.6644 3.38666 37.0244 2.50666 37.7444 1.84C38.491 1.14666 39.4377 0.799998 40.5844 0.799998C41.731 0.799998 42.6644 1.14666 43.3844 1.84C44.131 2.50666 44.5044 3.38666 44.5044 4.48C44.5044 5.57333 44.131 6.44 43.3844 7.08C42.6644 7.72 41.731 8.04 40.5844 8.04Z'
          fill='#FFC700'
        />
      </svg>
    </div>
  )
}

export default Logo
