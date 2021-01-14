import prompts from 'prompts'
import Api from 'wikifolio'

(async () => {
  console.warn('Your credentials will not be stored.')

  const arg = (process.argv || []).slice(2)

  const {email} = await prompts({
    type: 'text',
    name: 'email',
    initial: arg[0],
    message: 'Wikifolio email'
  })

	const {password} = await prompts({
    type: 'password',
    name: 'password',
    initial: arg[1],
    message: 'Wikifolio password'
  })

  const api = new Api({email, password})

  const wikifolio = api.wikifolio('wfobserver')
  console.log( await wikifolio.details() )

  // const wikifolio = wiki.wikifolio('wfobserver')
  // console.log( await wikifolio.price() )

  // const wikifolio = wiki.wikifolio('wf01smylel')
  // console.log( await wikifolio.trades({pageSize: 100, page: 1}) )

  // const wikifolio = wiki.wikifolio('wfobserver')
  // console.log( await wikifolio.portfolio() )

  // const wikifolios = await wiki.search({query: 'Supervisor'})
  // console.log( wikifolios )

  // const user = wiki.user('riennevaplus')
  // console.log( await user.details() )

  // const user = wiki.user('riennevaplus')
  // console.log( await user.wikifolios() )
})()