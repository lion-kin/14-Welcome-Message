module.exports = (client) => {
  const channelId = '773984197034377227' // welcome channel
  const targetChannelId = '773985207124623381' // rules and info

  client.on('guildMemberAdd', (member) => {
    const message = `Please welcome <@${
      member.id
    }> to the server! Please check out ${member.guild.channels.cache
      .get(targetChannelId)
      .toString()}`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  })
}
