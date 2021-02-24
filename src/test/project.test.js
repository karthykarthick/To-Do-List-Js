import Project from '../components/Project'

describe('Project class', () => {
  const newProject = new Project('project1');

  it('should have the name of the project', () => {
    expect(newProject.name).toEqual('project1')
  })
})