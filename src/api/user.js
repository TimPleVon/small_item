import http from '@/utils/request'

export const reqLogin = (mobile, code) => {
  return http({
    url: 'v1_0/authorizations',
    method: 'post',
    data: {
      mobile,
      code
    }
  })
}
export const regetUserInfo = () => {
  return http({
    url: 'v1_0/user/profile',
    method: 'GET'

  })
}
export const regetUserFollowings = () => {
  return http({
    url: 'v1_0/user/followings',
    method: 'GET'

  })
}
